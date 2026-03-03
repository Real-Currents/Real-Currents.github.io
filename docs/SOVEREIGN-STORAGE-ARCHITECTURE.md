# Real-Currents Sovereign Storage Stack

Unified technical blueprint integrating Quarto/Next.js frontend, Gandi/Worker gateway, and Lighthouse/Filecoin orchestration.

## Architecture

```mermaid
graph TD
    subgraph "PRODUCER (GitHub Actions)"
        A[Quarto Source] --> B[Next.js Build]
        B --> C1[Gandi Git Push]
        B --> C2[Lighthouse SDK Upload]
    end

    subgraph "STORAGE ORCHESTRATION (Lighthouse)"
        C2 --> D[Endowment Pool]
        D --> E[Filecoin Deal Engine]
        E --> F[(Filecoin Network)]
    end

    subgraph "SECURITY GUARD (Gandi Node.js)"
        C1 --> G[Live Next.js Site]
        H[Custom server.js] --> G
        H --> I[IPFS/IPNS Gateway]
        H --> J[Provenance Manifest]
    end

    subgraph "SOVEREIGN WORKER (VPS)"
        I --> K[Kubo IPFS Node]
        K --> L[IPNS Key Manager]
        L --> M[Local Pinning]
    end

    subgraph "USER EXPERIENCE"
        U[Conventional User] -->|HTTPS| G
        V[Archival User] -->|/ipns/| I
        W[Developer] -->|Kavach| D
    end

    F -.->|Storage Proofs| J
    M -.->|Content Availability| I
```

## Capabilities

| Access | URL | Use Case |
|--------|-----|----------|
| **Live Site** | `real-currents.com/xr/baseline-0` | Fast, SEO-optimized |
| **Stable Archive** | `real-currents.com/ipns/xr-baseline-0` | Verifiable, sovereign |
| **Perpetual Backup** | Lighthouse/Filecoin | Endowment-funded, decades-long |
| **Sensitive Data** | Kavach Encryption | Threshold-protected PII/Drafts |

## Required Secrets

- `LIGHTHOUSE_API_KEY` – From [Lighthouse dapp](https://files.lighthouse.storage)
- `DEPLOY_SECRET` – Shared secret for IPNS publish API (set on Gandi server too)

## Gateway Deployment

1. Deploy `gateway/` to Gandi VPS
2. Set `DEPLOY_SECRET` environment variable
3. (Optional) Configure Kubo IPFS for IPNS publishing
