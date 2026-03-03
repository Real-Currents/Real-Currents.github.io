import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { create } from 'ipfs-http-client';
import mime from 'mime-types';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// IPFS Client - connects to your Worker node via Caddy
// When IPFS_NODE_HOST is not set (e.g. local dev), IPFS/IPNS routes will return 503
let ipfs = null;
if (process.env.IPFS_NODE_HOST && process.env.IPFS_USER && process.env.IPFS_PASS) {
  ipfs = create({
    host: process.env.IPFS_NODE_HOST,
    port: 443,
    protocol: 'https',
    headers: {
      authorization: `Basic ${Buffer.from(
        `${process.env.IPFS_USER}:${process.env.IPFS_PASS}`
      ).toString('base64')}`
    }
  });
}

// Simple in-memory cache for IPNS resolutions (optional but recommended)
const ipnsCache = new Map();
const IPNS_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // ===== 1. IPFS GATEWAY (Immutable Content) =====
      if (pathname.startsWith('/ipfs/')) {
        return await handleIPFSRequest(req, res, pathname);
      }

      // ===== 2. IPNS GATEWAY (Mutable Pointers) =====
      if (pathname.startsWith('/ipns/')) {
        return await handleIPNSRequest(req, res, pathname);
      }

      // ===== 3. DEPLOYMENT API (Authenticated Write) =====
      if (pathname === '/api/deploy' && req.method === 'POST') {
        return await handleDeployRequest(req, res);
      }

      // ===== 4. IPNS UPDATE API (Authenticated Write) =====
      if (pathname === '/api/ipns/publish' && req.method === 'POST') {
        return await handleIPNSPublish(req, res);
      }

      // ===== 4b. CURRENT IPFS CID (Public Read) =====
      if (pathname === '/api/ipfs/current' && req.method === 'GET') {
        return await handleCurrentCID(req, res);
      }

      // ===== 5. DEFAULT: Next.js Handler (Live Site) =====
      // This handles all conventional routes like /xr/baseline-0
      return handle(req, res, parsedUrl);

    } catch (err) {
      console.error('Server error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});

// ===== IPFS Gateway Handler =====
async function handleIPFSRequest(req, res, pathname) {
  if (!ipfs) {
    res.statusCode = 503;
    res.end('IPFS gateway not configured (set IPFS_NODE_HOST, IPFS_USER, IPFS_PASS)');
    return;
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

    res.setHeader('Content-Type', mime.lookup(filePath) || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(content);
  } catch (err) {
    console.error('IPFS fetch error:', err);
    res.statusCode = 404;
    res.end('IPFS content not found');
  }
}

// ===== IPNS Gateway Handler =====
async function handleIPNSRequest(req, res, pathname) {
  if (!ipfs) {
    res.statusCode = 503;
    res.end('IPNS gateway not configured (set IPFS_NODE_HOST, IPFS_USER, IPFS_PASS)');
    return;
  }

  try {
    const parts = pathname.split('/').filter(Boolean);
    const ipnsName = parts[1]; // e.g., "xr-baseline-0" or "k51qzi5..."
    const subPath = parts.slice(2).join('/') || 'index.html';

    // Check cache first
    const cacheKey = ipnsName;
    const cached = ipnsCache.get(cacheKey);
    let cid;

    if (cached && Date.now() - cached.timestamp < IPNS_CACHE_TTL) {
      cid = cached.cid;
      console.log(`IPNS cache hit: ${ipnsName} -> ${cid}`);
    } else {
      // Resolve IPNS name to CID
      console.log(`Resolving IPNS: ${ipnsName}`);
      const resolved = await ipfs.name.resolve(`/ipns/${ipnsName}`);

      // resolved is an async iterator, get first result
      for await (const result of resolved) {
        const pathStr = typeof result === 'string' ? result : (result?.Path || result?.path || '');
        cid = pathStr.replace(/^\/ipfs\//, '');
        break;
      }

      // Cache the result
      ipnsCache.set(cacheKey, { cid, timestamp: Date.now() });
      console.log(`IPNS resolved: ${ipnsName} -> ${cid}`);
    }

    // Now fetch the content from IPFS
    const chunks = [];
    for await (const chunk of ipfs.cat(`${cid}/${subPath}`)) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);

    res.setHeader('Content-Type', mime.lookup(subPath) || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 min cache for IPNS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-IPFS-Path', `/ipfs/${cid}/${subPath}`);
    res.end(content);
  } catch (err) {
    console.error('IPNS resolution error:', err);
    res.statusCode = 404;
    res.end('IPNS name not found or resolution failed');
  }
}

// ===== Deployment Handler (CAR Upload) =====
async function handleDeployRequest(req, res) {
  if (!ipfs) {
    res.statusCode = 503;
    res.end('IPFS not configured');
    return;
  }

  // Verify API key
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
  }

  try {
    // Collect the CAR file from request body
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const carData = Buffer.concat(chunks);

    // Import CAR to IPFS via the Worker node
    const result = await ipfs.dag.import(carData);

    // Extract root CID
    let rootCid;
    for await (const item of result) {
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

// ===== Current CID Handler (resolves IPNS to get latest deployed CID) =====
async function handleCurrentCID(req, res) {
  if (!ipfs) {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'IPFS not configured' }));
  }

  try {
    const key = new URL(req.url, `http://${req.headers.host}`).searchParams.get('key') || 'xr-baseline-0';
    const resolved = await ipfs.name.resolve(`/ipns/${key}`);
    let cid = null;
    for await (const result of resolved) {
      const pathStr = typeof result === 'string' ? result : (result?.Path || result?.path || '');
      cid = pathStr.replace(/^\/ipfs\//, '');
      break;
    }
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.end(JSON.stringify({ cid: cid || null }));
  } catch (err) {
    console.error('Current CID error:', err);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
  }
}

// ===== IPNS Publish Handler =====
async function handleIPNSPublish(req, res) {
  if (!ipfs) {
    res.statusCode = 503;
    res.end('IPFS not configured');
    return;
  }

  // Verify API key
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
  }

  try {
    // Parse request body
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

    // Publish to IPNS via Worker node
    console.log(`Publishing IPNS: ${key} -> ${cid}`);
    const result = await ipfs.name.publish(`/ipfs/${cid}`, { key });

    // Clear cache for this key
    ipnsCache.delete(key);

    // Extract IPNS name from result
    let ipnsName;
    for await (const item of result) {
      ipnsName = item.name;
      break;
    }

    console.log(`IPNS published: ${ipnsName}`);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ipns: ipnsName, cid }));
  } catch (err) {
    console.error('IPNS publish error:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
}
