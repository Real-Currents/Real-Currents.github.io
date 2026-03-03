import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import mimeTypes from 'mime-types';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const outDir = join(__dirname, 'out');

// ===== IPFS CLIENT SETUP =====
// Only initialised when IPFS_NODE_HOST is present in the environment.
let ipfs = null;
if (process.env.IPFS_NODE_HOST) {
  const { create } = await import('kubo-rpc-client');
  ipfs = create({
    host: process.env.IPFS_NODE_HOST,
    port: 443,
    protocol: 'https',
    headers: {
      authorization: `Basic ${Buffer.from(
        `${process.env.IPFS_USER}:${process.env.IPFS_PASS}`
      ).toString('base64')}`,
    },
  });
  console.log(`> IPFS client connected to ${process.env.IPFS_NODE_HOST}`);
}

// Simple in-memory IPNS resolution cache
const ipnsCache = new Map();
const IPNS_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// ===== MAIN REQUEST HANDLER SETUP =====
// Development: delegate to Next.js hot-reload dev server.
// Production:  serve the pre-built static export from out/.
let handle;
if (dev) {
  const { default: next } = await import('next');
  const app = next({ dev: true });
  await app.prepare();
  handle = app.getRequestHandler();
} else {
  handle = (req, res, parsedUrl) => serveStaticFile(req, res, parsedUrl);
}

// ===== HTTP SERVER =====
createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // 1. IPFS gateway — immutable content addressed by CID
    if (pathname.startsWith('/ipfs/')) {
      return await handleIPFSRequest(req, res, pathname);
    }

    // 2. IPNS gateway — mutable pointers to the latest CID
    if (pathname.startsWith('/ipns/')) {
      return await handleIPNSRequest(req, res, pathname);
    }

    // 3. Deployment API — receives a CAR file and imports it into IPFS
    if (pathname === '/api/deploy' && req.method === 'POST') {
      return await handleDeployRequest(req, res);
    }

    // 4. IPNS publish API — updates an IPNS key to point at a new CID
    if (pathname === '/api/ipns/publish' && req.method === 'POST') {
      return await handleIPNSPublish(req, res);
    }

    // 5. Everything else → Next.js (dev) or static files (production)
    return handle(req, res, parsedUrl);
  } catch (err) {
    console.error('Server error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}).listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

// ===== STATIC FILE HANDLER (production) =====
async function serveStaticFile(req, res, parsedUrl) {
  let filePath = parsedUrl.pathname || '/';

  if (filePath === '/') {
    filePath = '/index.html';
  } else if (!extname(filePath)) {
    // Treat bare paths as directories and look for index.html
    filePath = filePath.replace(/\/$/, '') + '/index.html';
  }

  const fullPath = join(outDir, filePath);
  try {
    const content = await readFile(fullPath);
    res.setHeader('Content-Type', mimeTypes.lookup(filePath) || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.end(content);
  } catch {
    res.statusCode = 404;
    res.end('Not found');
  }
}

// ===== IPFS GATEWAY HANDLER =====
async function handleIPFSRequest(req, res, pathname) {
  if (!ipfs) {
    res.statusCode = 503;
    return res.end('IPFS not configured');
  }
  try {
    const parts = pathname.split('/').filter(Boolean);
    const cid = parts[1];
    const filePath = parts.slice(2).join('/') || 'index.html';

    const chunks = [];
    for await (const chunk of ipfs.cat(`${cid}/${filePath}`)) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);

    res.setHeader('Content-Type', mimeTypes.lookup(filePath) || 'application/octet-stream');
    // Content is immutable — safe to cache for a year
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(content);
  } catch (err) {
    console.error('IPFS fetch error:', err);
    res.statusCode = 404;
    res.end('IPFS content not found');
  }
}

// ===== IPNS GATEWAY HANDLER =====
async function handleIPNSRequest(req, res, pathname) {
  if (!ipfs) {
    res.statusCode = 503;
    return res.end('IPFS not configured');
  }
  try {
    const parts = pathname.split('/').filter(Boolean);
    const ipnsName = parts[1]; // key name (e.g. "xr-baseline-0") or k51… address
    const subPath = parts.slice(2).join('/') || 'index.html';

    // Resolve IPNS name → CID, with in-memory cache
    const cached = ipnsCache.get(ipnsName);
    let cid;
    if (cached && Date.now() - cached.timestamp < IPNS_CACHE_TTL) {
      cid = cached.cid;
      console.log(`IPNS cache hit: ${ipnsName} -> ${cid}`);
    } else {
      console.log(`Resolving IPNS: ${ipnsName}`);
      for await (const result of ipfs.name.resolve(`/ipns/${ipnsName}`)) {
        cid = result.replace('/ipfs/', '');
        break;
      }
      ipnsCache.set(ipnsName, { cid, timestamp: Date.now() });
      console.log(`IPNS resolved: ${ipnsName} -> ${cid}`);
    }

    const chunks = [];
    for await (const chunk of ipfs.cat(`${cid}/${subPath}`)) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);

    res.setHeader('Content-Type', mimeTypes.lookup(subPath) || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 min — pointer may update
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-IPFS-Path', `/ipfs/${cid}/${subPath}`);
    res.end(content);
  } catch (err) {
    console.error('IPNS resolution error:', err);
    res.statusCode = 404;
    res.end('IPNS name not found or resolution failed');
  }
}

// ===== DEPLOYMENT HANDLER (CAR upload) =====
async function handleDeployRequest(req, res) {
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
  }
  if (!ipfs) {
    res.statusCode = 503;
    return res.end('IPFS not configured');
  }
  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const carData = Buffer.concat(chunks);

    // dag.import expects an async iterable of Uint8Array
    async function* carSource() { yield carData; }

    let rootCid;
    for await (const item of ipfs.dag.import(carSource())) {
      if (item.root) {
        rootCid = item.root.cid.toString();
        break;
      }
    }

    console.log(`Deployed to IPFS: ${rootCid}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ cid: rootCid }));
  } catch (err) {
    console.error('Deploy error:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
}

// ===== IPNS PUBLISH HANDLER =====
async function handleIPNSPublish(req, res) {
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
  }
  if (!ipfs) {
    res.statusCode = 503;
    return res.end('IPFS not configured');
  }
  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString());
    const { key, cid } = body;

    if (!key || !cid) {
      res.statusCode = 400;
      return res.end('Missing key or cid');
    }

    console.log(`Publishing IPNS: ${key} -> ${cid}`);
    const result = await ipfs.name.publish(`/ipfs/${cid}`, { key });

    // Invalidate cache so the next resolution fetches the new pointer
    ipnsCache.delete(key);

    const ipnsName = result.name;
    console.log(`IPNS published: ${ipnsName}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ipns: ipnsName, cid }));
  } catch (err) {
    console.error('IPNS publish error:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
}
