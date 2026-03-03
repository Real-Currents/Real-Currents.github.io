import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { create } from 'ipfs-http-client';
import mime from 'mime-types';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ipfs = create({
  host: process.env.IPFS_NODE_HOST,
  port: 443,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(
      `${process.env.IPFS_USER}:${process.env.IPFS_PASS}`
    ).toString('base64')}`
  }
});

const ipnsCache = new Map();
const IPNS_CACHE_TTL = 5 * 60 * 1000;

async function handleIPFSRequest(req, res, pathname) {
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

async function handleIPNSRequest(req, res, pathname) {
  try {
    const parts = pathname.split('/').filter(Boolean);
    const ipnsName = parts[1];
    const subPath = parts.slice(2).join('/') || 'index.html';

    const cacheKey = ipnsName;
    const cached = ipnsCache.get(cacheKey);
    let cid;

    if (cached && Date.now() - cached.timestamp < IPNS_CACHE_TTL) {
      cid = cached.cid;
      console.log(`IPNS cache hit: ${ipnsName} -> ${cid}`);
    } else {
      console.log(`Resolving IPNS: ${ipnsName}`);
      const resolved = await ipfs.name.resolve(`/ipns/${ipnsName}`);

      for await (const result of resolved) {
        cid = result.replace('/ipfs/', '');
        break;
      }

      ipnsCache.set(cacheKey, { cid, timestamp: Date.now() });
      console.log(`IPNS resolved: ${ipnsName} -> ${cid}`);
    }

    const chunks = [];
    for await (const chunk of ipfs.cat(`${cid}/${subPath}`)) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);

    res.setHeader('Content-Type', mime.lookup(subPath) || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-IPFS-Path', `/ipfs/${cid}/${subPath}`);
    res.end(content);
  } catch (err) {
    console.error('IPNS resolution error:', err);
    res.statusCode = 404;
    res.end('IPNS name not found or resolution failed');
  }
}

async function handleDeployRequest(req, res) {
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
  }

  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const carData = Buffer.concat(chunks);

    const result = await ipfs.dag.import(carData);

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

async function handleIPNSPublish(req, res) {
  if (req.headers['x-api-key'] !== process.env.DEPLOY_SECRET) {
    res.statusCode = 401;
    return res.end('Unauthorized');
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

    ipnsCache.delete(key);

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

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname.startsWith('/ipfs/')) {
        return await handleIPFSRequest(req, res, pathname);
      }

      if (pathname.startsWith('/ipns/')) {
        return await handleIPNSRequest(req, res, pathname);
      }

      if (pathname === '/api/deploy' && req.method === 'POST') {
        return await handleDeployRequest(req, res);
      }

      if (pathname === '/api/ipns/publish' && req.method === 'POST') {
        return await handleIPNSPublish(req, res);
      }

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
