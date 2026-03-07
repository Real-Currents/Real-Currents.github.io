# IPFS Integration - Implementation Summary

This document summarizes the IPFS/IPNS integration implemented per the Real-Currents IPFS Integration plan.

## What Was Implemented

### Phase 2: Gandi Node.js Server (Security Guard + Gateway)

- **`server.js`** – Custom HTTP server that:
  - Serves `/ipfs/<cid>/...` – Immutable IPFS gateway
  - Serves `/ipns/<name>/...` – Mutable IPNS gateway (with 5-min cache)
  - `POST /api/deploy` – CAR upload (authenticated via `x-api-key`)
  - `POST /api/ipns/publish` – IPNS publish (authenticated)
  - `GET /api/ipfs/current` – Returns current CID for IPNS key (for footer links)
  - Falls through to Next.js for all other routes

- **Dependencies added**: `kubo-rpc-client` (Kubo HTTP RPC API client), `mime-types`

- **Scripts updated**:
  - `dev` – Uses custom server (with Quarto render)
  - `start` – Production server; `start:static` – Original static server

### Phase 3: GitHub Actions

- **`.github/workflows/deploy.yml`** – Runs on push to `main`:
  1. Build (Quarto + Next.js)
  2. Deploy to Gandi via Git
  3. Package `out/` as CAR
  4. Upload CAR to `/api/deploy`
  5. Publish IPNS `xr-baseline-0` → new CID

### Phase 4: Next.js Configuration

- **`next.config.mjs`** – Added `trailingSlash: true`, `images.unoptimized: true` (static export already configured)

### Phase 6: Content Integration

- **`src/components/IpfsLinks.tsx`** – Client component that fetches current CID and shows:
  - Latest Version (IPNS) – `/ipns/xr-baseline-0`
  - Immutable Snapshot (IPFS) – `/ipfs/<cid>` when available

- **`src/app/layout.tsx`** – Footer includes `IpfsLinks`, `metadataBase` for canonical URLs

## Next Steps (Manual)

### Phase 1: Worker Node Setup (VPS)

1. Install Kubo (IPFS) on your VPS
2. Create IPNS key: `ipfs key gen xr-baseline-0 --type=ed25519`
3. Install and configure Caddy with Basic Auth
4. Point `ipfs-api.real-currents.com` to the VPS

### Configure Secrets

**GitHub** (Settings → Secrets and variables → Actions):

- `GANDI_GIT_URL` – Gandi Git remote URL
- `DEPLOY_SECRET` – Strong random secret (same as Gandi env)

**Gandi** (or `.env` for local):

- `IPFS_NODE_HOST`, `IPFS_USER`, `IPFS_PASS` – Worker node credentials
- `DEPLOY_SECRET` – Same as GitHub secret

See `.env.example` for the full list.

## URL Structure

| Pattern | Handler | Purpose |
|---------|---------|---------|
| `/xr/baseline-0`, `/`, etc. | Next.js | Live site |
| `/ipfs/<cid>/...` | IPFS Gateway | Immutable snapshot |
| `/ipns/xr-baseline-0/...` | IPNS Gateway | Stable pointer to latest |

## Testing Locally

Without the Worker node, IPFS/IPNS routes return 503. To test:

```bash
# With env vars set (copy .env.example to .env)
npm run dev
# Then: curl http://localhost:3000/ipns/xr-baseline-0
```

With the Worker configured, the IPFS and IPNS gateways will work as expected.
