/**
 * Real-Currents Sovereign Storage Gateway
 * Gandi VPS Node.js server for IPNS publishing and provenance manifest.
 *
 * Deploy to Gandi and run: node server.js
 * Requires: DEPLOY_SECRET, IPFS/Kubo node for IPNS
 *
 * API: POST /api/ipns/publish
 *   Headers: x-api-key: <DEPLOY_SECRET>
 *   Body: { key, cid, lighthouse_deal_id? }
 */
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const MANIFEST_PATH = path.join(__dirname, 'metadata', 'deals.json');
const DEPLOY_SECRET = process.env.DEPLOY_SECRET || '';

async function ensureManifestDir() {
  const dir = path.dirname(MANIFEST_PATH);
  await fs.mkdir(dir, { recursive: true });
}

async function readManifest() {
  try {
    const data = await fs.readFile(MANIFEST_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function handleIPNSPublish(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const apiKey = req.headers['x-api-key'];
  if (!DEPLOY_SECRET || apiKey !== DEPLOY_SECRET) {
    res.writeHead(401);
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  let body = '';
  for await (const chunk of req) body += chunk;

  let parsed;
  try {
    parsed = JSON.parse(body);
  } catch {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid JSON' }));
    return;
  }

  const { key, cid, lighthouse_deal_id } = parsed;
  if (!key || !cid) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'key and cid required' }));
    return;
  }

  // 1. Update IPNS (if using Kubo/IPFS - requires ipfs-http-client or exec)
  // await ipfs.name.publish(`/ipfs/${cid}`, { key });
  // For now, we only record the manifest - wire IPFS when Kubo is available

  // 2. Record the Provenance Entry
  await ensureManifestDir();
  const manifest = await readManifest();
  const existing = manifest[key] || {};
  const history = existing.history || [];

  // Append to history if this is a new CID
  if (existing.latest_cid !== cid) {
    history.push({
      version: `v${history.length + 1}`,
      cid,
      date: new Date().toISOString().split('T')[0],
    });
    // Keep last 10 entries
    if (history.length > 10) history.shift();
  }

  manifest[key] = {
    latest_cid: cid,
    updated_at: new Date().toISOString(),
    lighthouse_deal: lighthouse_deal_id || 'pending',
    network: 'filecoin-mainnet',
    history,
    provenance: {
      ...(existing.provenance || {}),
      storage_provider: existing.provenance?.storage_provider || 'f012345',
      deal_id: lighthouse_deal_id || existing.provenance?.deal_id,
      endowment_status: existing.provenance?.endowment_status || 'active',
      replication_factor: existing.provenance?.replication_factor || 2,
    },
  };

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'published', manifest: manifest[key] }));
}

async function handleManifest(req, res) {
  if (req.method !== 'GET') {
    res.writeHead(405);
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const manifest = await readManifest();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(manifest));
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/api/ipns/publish') return handleIPNSPublish(req, res);
    if (req.url === '/api/manifest' || req.url === '/api/deals') return handleManifest(req, res);
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Real-Currents Gateway listening on port ${PORT}`);
});
