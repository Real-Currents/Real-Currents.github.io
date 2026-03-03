# Real-Currents Gateway

Node.js server for the Gandi VPS. Handles IPNS publishing and provenance manifest updates.

## Setup

```bash
cd gateway
# No npm install needed - uses Node built-ins only
```

## Environment

- `DEPLOY_SECRET` – Required. Shared secret for `/api/ipns/publish` (must match GitHub Actions secret)
- `PORT` – Optional. Default 3001

## Run

```bash
DEPLOY_SECRET=your-secret node server.js
```

## API

### POST /api/ipns/publish

Updates the IPNS pointer and records the provenance manifest.

- **Headers:** `x-api-key: <DEPLOY_SECRET>`
- **Body:** `{ "key": "xr-baseline-0", "cid": "<Lighthouse CID>", "lighthouse_deal_id": "optional" }`

### GET /api/manifest

Returns the current deals manifest (storage proofs).

## Manifest

`metadata/deals.json` is updated on each publish. It serves as the on-chain registry for site history.
