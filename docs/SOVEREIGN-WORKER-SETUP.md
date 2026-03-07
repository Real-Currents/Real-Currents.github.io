# Sovereign Worker VPS Setup

Step-by-step guide to set up the **SOVEREIGN WORKER** components on a fresh Ubuntu 26.04 LTS (Resolute Raccoon) VPS.

> **Note:** Kubo’s HTTP RPC API (`/api/v0/...`) remains the stable interface. The Gandi gateway uses `kubo-rpc-client` (the official JS client for that API). For in-browser or in-process IPFS nodes, the IPFS team now recommends Helia (`@helia/*`).

- **Kubo IPFS Node** – IPFS daemon for content storage and retrieval
- **IPNS Key Manager** – Ed25519 keys for stable, updateable pointers (e.g. `xr-baseline-0`)
- **Local Pinning** – Content pinned locally for gateway availability

---

## Prerequisites

- Ubuntu 26.04 LTS (Resolute Raccoon) – fresh install
- Root or sudo access
- Domain (e.g. `ipfs-api.real-currents.com`) pointed to the VPS IP
- At least 2 CPU cores, 6 GB RAM, 20 GB disk (more for large archives)

---

## 1. Install Kubo (IPFS)

```bash
# Set version (check https://dist.ipfs.tech/#kubo for latest)
# v0.40.x recommended; HTTP RPC API (/api/v0/...) is stable and used by kubo-rpc-client
KUBO_VERSION="v0.40.1"

# Download and install
cd /tmp
wget "https://dist.ipfs.tech/kubo/${KUBO_VERSION}/kubo_${KUBO_VERSION}_linux-amd64.tar.gz"
tar -xzf "kubo_${KUBO_VERSION}_linux-amd64.tar.gz"
cd kubo
sudo bash install.sh

# Verify
ipfs version
```

---

## 2. Initialize Kubo

```bash
# Initialize the repo (creates ~/.ipfs/)
ipfs init

# Optional: use lowpower profile on small VPS
# ipfs init --profile=lowpower
```

---

## 3. Configure Kubo for Secure API Access

Expose the API only on localhost so Caddy can reverse-proxy with auth:

```bash
# Restrict API to localhost
ipfs config Addresses.API /ip4/127.0.0.1/tcp/5001

# Optional: restrict Gateway to localhost if you only serve via Gandi
ipfs config Addresses.Gateway /ip4/127.0.0.1/tcp/8080

# Verify config
ipfs config Addresses
```

---

## 4. Create IPNS Keys

```bash
# Create key for the stable baseline pointer
ipfs key gen xr-baseline-0 --type=ed25519

# List keys (save the IPNS name, e.g. k51qzi5uqu5dk...)
ipfs key list -l
```

Save the `k51...` IPNS name for reference. The key name `xr-baseline-0` is what the deploy workflow uses when publishing.

---

## 5. Local Pinning (Default Behavior)

Kubo pins content by default when you add or import it. No extra setup is needed:

- **CAR import** (via `/api/deploy`) – pins the imported DAG
- **IPNS publish** – updates the pointer; the target CID is already pinned from the CAR import

To inspect pins:

```bash
ipfs pin ls
```

---

## 6. Run Kubo as a Systemd Service

```bash
# Create service file
sudo tee /etc/systemd/system/ipfs.service << 'EOF'
[Unit]
Description=IPFS Daemon (Kubo)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=YOUR_USER
ExecStart=/usr/local/bin/ipfs daemon
Restart=on-failure
RestartSec=10
Environment=IPFS_PATH=/home/YOUR_USER/.ipfs

[Install]
WantedBy=multi-user.target
EOF
```

Replace `YOUR_USER` with your actual username (e.g. `ubuntu` or your sudo user).

```bash
sudo systemctl daemon-reload
sudo systemctl enable ipfs
sudo systemctl start ipfs
sudo systemctl status ipfs
```

---

## 7. Install Caddy (Reverse Proxy + Basic Auth)

```bash
# Add Caddy repository
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list

# Install
sudo apt update
sudo apt install -y caddy

# Generate password hash for Basic Auth
caddy hash-password
# Enter a strong password; save the output hash
```

---

## 8. Configure Caddy

Create `/etc/caddy/Caddyfile`:

```caddy
# Replace with your VPS domain
ipfs-api.real-currents.com {
    reverse_proxy localhost:5001 {
        header_up Host {host}
    }

    basic_auth /* {
        gandi YOUR_HASH_FROM_CADDY_HASH_PASSWORD
    }
}
```

Replace `YOUR_HASH_FROM_CADDY_HASH_PASSWORD` with the hash from step 7. Use `gandi` as the username (or change it and update `IPFS_USER` on Gandi accordingly).

```bash
sudo systemctl reload caddy
```

---

## 9. Verify Setup

From your local machine:

```bash
# Test authenticated API access (replace PASSWORD with actual password)
curl -u gandi:PASSWORD https://ipfs-api.real-currents.com/api/v0/version

# Test key list
curl -u gandi:PASSWORD -X POST https://ipfs-api.real-currents.com/api/v0/key/list
```

---

## 10. Firewall (Optional)

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

---

## Summary: What Runs Where

| Component        | Location   | Purpose                                      |
|-----------------|------------|----------------------------------------------|
| Kubo daemon     | VPS :5001  | IPFS node, IPNS keys, local pinning          |
| Caddy           | VPS :443   | Reverse proxy, Basic Auth for API            |
| Gandi server.js | Gandi      | Connects to VPS via `IPFS_NODE_HOST` + auth |

---

## Environment Variables for Gandi

On the Gandi Node.js server, set:

```bash
IPFS_NODE_HOST=ipfs-api.real-currents.com
IPFS_USER=gandi
IPFS_PASS=your-caddy-password
DEPLOY_SECRET=your-deploy-secret
```

---

## Troubleshooting

| Issue                    | Check                                                |
|--------------------------|------------------------------------------------------|
| `ipfs daemon` fails      | `ipfs repo fsck`; ensure enough disk space           |
| Caddy 502                | `systemctl status ipfs`; ensure Kubo is listening    |
| Auth rejected            | Verify hash in Caddyfile; check username/password; try `basicauth` if `basic_auth` fails (older Caddy) |
| IPNS publish fails       | Key exists: `ipfs key list -l`; key name matches      |
