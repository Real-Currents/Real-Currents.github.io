#!/usr/bin/env node
/**
 * Uploads build output to Lighthouse (Filecoin) for perpetual storage.
 * Used by .github/workflows/deploy.yml
 *
 * Usage: LIGHTHOUSE_API_KEY=xxx node scripts/lighthouse-upload.mjs [path]
 * Outputs: JSON with { hash } to stdout
 */
import lighthouse from '@lighthouse-web3/sdk';

const uploadPath = process.argv[2] || './out';
const apiKey = process.env.LIGHTHOUSE_API_KEY;

if (!apiKey) {
  console.error(JSON.stringify({ error: 'LIGHTHOUSE_API_KEY required' }));
  process.exit(1);
}

try {
  const response = await lighthouse.upload(uploadPath, apiKey);
  const hash = response?.data?.Hash ?? response?.Hash ?? '';
  console.log(JSON.stringify({ hash }));
} catch (err) {
  console.error(JSON.stringify({ error: err?.message || String(err) }));
  process.exit(1);
}
