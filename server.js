import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { parse } from "node:url";

import next from "next";
import { create as createIpfsClient } from "ipfs-http-client";
import mime from "mime-types";

const dev = process.env.NODE_ENV !== "production";
const port = Number(process.env.PORT || 3000);
const staticDir = path.join(process.cwd(), "out");

const MAX_CAR_UPLOAD_BYTES = 1024 * 1024 * 1024; // 1 GB
const MAX_JSON_BYTES = 1024 * 1024; // 1 MB

const IPNS_CACHE_TTL = 5 * 60 * 1000;
const KEY_ALIAS_CACHE_TTL = 60 * 1000;

const ipnsCache = new Map();
let keyAliasCache = { timestamp: 0, entries: new Map() };
let ipfsClient;
let nextHandler = null;

class MissingIpfsConfigError extends Error {}

function isAsyncIterable(value) {
  return value != null && typeof value[Symbol.asyncIterator] === "function";
}

async function firstAsyncValue(value) {
  if (isAsyncIterable(value)) {
    for await (const item of value) {
      return item;
    }
    return undefined;
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function writeJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function writeText(res, statusCode, message) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(message);
}

function sanitizeRelativePath(relativePath) {
  const normalized = path.posix.normalize(relativePath || "");

  if (!normalized || normalized === "." || normalized === "/") {
    return "index.html";
  }

  if (normalized === ".." || normalized.startsWith("../") || normalized.includes("/../")) {
    return null;
  }

  return normalized.replace(/^\/+/, "");
}

function staticCandidatesForPath(pathname) {
  const cleanPath = pathname || "/";
  const stripped = cleanPath.replace(/^\/+/, "");

  if (cleanPath === "/") {
    return ["index.html"];
  }

  const candidates = new Set();
  candidates.add(stripped);

  if (cleanPath.endsWith("/")) {
    candidates.add(path.posix.join(stripped, "index.html"));
  }

  if (!path.posix.extname(stripped)) {
    candidates.add(`${stripped}.html`);
    candidates.add(path.posix.join(stripped, "index.html"));
  }

  return Array.from(candidates)
    .map((candidate) => sanitizeRelativePath(candidate))
    .filter(Boolean);
}

function gatewayCandidates(parts, offset, pathname) {
  const rawSubPath = parts.slice(offset).join("/");
  const normalizedRaw = path.posix.normalize(rawSubPath || "");

  if (
    normalizedRaw === ".." ||
    normalizedRaw.startsWith("../") ||
    normalizedRaw.includes("/../")
  ) {
    throw new Error("Invalid gateway path");
  }

  const basePath =
    !normalizedRaw || normalizedRaw === "." || normalizedRaw === "/"
      ? ""
      : normalizedRaw.replace(/^\/+/, "");

  const candidates = new Set([basePath || "index.html"]);
  const requestedDirectory = pathname.endsWith("/") || rawSubPath.length === 0;
  const hasExtension = Boolean(path.posix.extname(basePath));

  if (requestedDirectory) {
    candidates.add(path.posix.join(basePath, "index.html"));
  } else if (!hasExtension) {
    candidates.add(path.posix.join(basePath, "index.html"));
    candidates.add(`${basePath}.html`);
  }

  return Array.from(candidates)
    .map((candidate) => sanitizeRelativePath(candidate))
    .filter(Boolean);
}

function staticPathFromRelative(relativePath) {
  const absolutePath = path.resolve(staticDir, relativePath);
  const relative = path.relative(staticDir, absolutePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return null;
  }

  return absolutePath;
}

function cacheControlForFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".html") {
    return "public, max-age=0, must-revalidate";
  }

  if (
    [
      ".css",
      ".gif",
      ".ico",
      ".jpeg",
      ".jpg",
      ".js",
      ".mjs",
      ".png",
      ".svg",
      ".webp",
      ".woff",
      ".woff2",
    ].includes(ext)
  ) {
    return "public, max-age=31536000, immutable";
  }

  return "public, max-age=300";
}

async function tryReadStaticFile(relativePath) {
  const absolutePath = staticPathFromRelative(relativePath);
  if (!absolutePath) {
    return null;
  }

  try {
    const stat = await fs.stat(absolutePath);
    if (!stat.isFile()) {
      return null;
    }

    const content = await fs.readFile(absolutePath);
    return { absolutePath, content };
  } catch {
    return null;
  }
}

async function serveStaticExport(pathname, res) {
  const decodedPathname = decodeURIComponent(pathname || "/");
  const candidates = staticCandidatesForPath(decodedPathname);

  for (const candidate of candidates) {
    const file = await tryReadStaticFile(candidate);
    if (!file) {
      continue;
    }

    const contentType = mime.lookup(file.absolutePath) || "application/octet-stream";
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", cacheControlForFile(file.absolutePath));
    res.end(file.content);
    return;
  }

  const notFound = await tryReadStaticFile("404.html");
  if (notFound) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    res.end(notFound.content);
    return;
  }

  writeText(res, 404, "Not Found");
}

function resolveIpfsApiUrl() {
  const host = process.env.IPFS_NODE_HOST;
  if (!host) {
    throw new MissingIpfsConfigError(
      "Missing IPFS configuration. Set IPFS_NODE_HOST, IPFS_USER, and IPFS_PASS.",
    );
  }

  if (host.startsWith("http://") || host.startsWith("https://")) {
    const base = host.endsWith("/") ? host.slice(0, -1) : host;
    return `${base}/api/v0`;
  }

  const protocol = process.env.IPFS_NODE_PROTOCOL || "https";
  const gatewayPort = process.env.IPFS_NODE_PORT || "443";
  return `${protocol}://${host}:${gatewayPort}/api/v0`;
}

function getIpfsClient() {
  if (ipfsClient) {
    return ipfsClient;
  }

  const user = process.env.IPFS_USER;
  const pass = process.env.IPFS_PASS;

  if (!user || !pass) {
    throw new MissingIpfsConfigError(
      "Missing IPFS credentials. Set IPFS_NODE_HOST, IPFS_USER, and IPFS_PASS.",
    );
  }

  ipfsClient = createIpfsClient({
    url: resolveIpfsApiUrl(),
    headers: {
      authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`,
    },
  });

  return ipfsClient;
}

function normalizeCid(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/^\/ipfs\//, "").trim();
}

async function readRequestBody(req, maxBytes) {
  const chunks = [];
  let byteLength = 0;

  for await (const chunk of req) {
    const chunkBuffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    byteLength += chunkBuffer.length;

    if (byteLength > maxBytes) {
      throw new Error(`Request body exceeds ${maxBytes} bytes`);
    }

    chunks.push(chunkBuffer);
  }

  return Buffer.concat(chunks);
}

async function readJsonBody(req) {
  const body = await readRequestBody(req, MAX_JSON_BYTES);

  if (!body.length) {
    return {};
  }

  return JSON.parse(body.toString("utf8"));
}

function hasValidDeploySecret(req) {
  const configuredSecret = process.env.DEPLOY_SECRET;
  const suppliedSecret = req.headers["x-api-key"];

  if (!configuredSecret) {
    return false;
  }

  if (typeof suppliedSecret !== "string") {
    return false;
  }

  return suppliedSecret === configuredSecret;
}

async function fetchFromIpfsByCid(cid, pathCandidates) {
  const ipfs = getIpfsClient();
  let lastError = new Error("Content not found");

  for (const filePath of pathCandidates) {
    try {
      const chunks = [];

      for await (const chunk of ipfs.cat(`${cid}/${filePath}`)) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }

      return {
        content: Buffer.concat(chunks),
        filePath,
      };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

function setGatewayHeaders(res, filePath, cacheControl) {
  res.setHeader("Content-Type", mime.lookup(filePath) || "application/octet-stream");
  res.setHeader("Cache-Control", cacheControl);
  res.setHeader("Access-Control-Allow-Origin", "*");
}

async function handleIPFSRequest(res, pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const cid = segments[1];

  if (!cid) {
    return writeText(res, 400, "Missing CID in /ipfs/<cid>/...");
  }

  try {
    const pathCandidates = gatewayCandidates(segments, 2, pathname);
    const { content, filePath } = await fetchFromIpfsByCid(cid, pathCandidates);

    res.statusCode = 200;
    setGatewayHeaders(res, filePath, "public, max-age=31536000, immutable");
    res.end(content);
  } catch (error) {
    if (error instanceof MissingIpfsConfigError) {
      return writeText(res, 503, error.message);
    }

    console.error("IPFS fetch error:", error);
    writeText(res, 404, "IPFS content not found");
  }
}

function getCachedIpnsResolution(name) {
  const cached = ipnsCache.get(name);
  if (!cached) {
    return null;
  }

  if (Date.now() - cached.timestamp > IPNS_CACHE_TTL) {
    ipnsCache.delete(name);
    return null;
  }

  return cached.cid;
}

function looksLikeIpnsPeerId(name) {
  return /^k[0-9a-z]+$/i.test(name) || /^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(name);
}

async function getIpnsKeyAliases(ipfs) {
  if (Date.now() - keyAliasCache.timestamp < KEY_ALIAS_CACHE_TTL && keyAliasCache.entries.size > 0) {
    return keyAliasCache.entries;
  }

  const keys = await ipfs.key.list();
  const entries = new Map();

  for (const key of keys || []) {
    if (key?.name && key?.id) {
      entries.set(key.name, key.id);
    }
  }

  keyAliasCache = {
    timestamp: Date.now(),
    entries,
  };

  return entries;
}

async function resolveIpnsNameToCid(ipnsName) {
  const cached = getCachedIpnsResolution(ipnsName);
  if (cached) {
    return cached;
  }

  const ipfs = getIpfsClient();
  let resolveName = ipnsName;

  if (!looksLikeIpnsPeerId(ipnsName)) {
    try {
      const aliases = await getIpnsKeyAliases(ipfs);
      const peerId = aliases.get(ipnsName);
      if (peerId) {
        resolveName = peerId;

        const aliasCached = getCachedIpnsResolution(peerId);
        if (aliasCached) {
          ipnsCache.set(ipnsName, { cid: aliasCached, timestamp: Date.now() });
          return aliasCached;
        }
      }
    } catch (error) {
      // Alias lookup is best effort; resolving by supplied name is still attempted.
      console.warn("IPNS key alias lookup failed:", error);
    }
  }

  const resolvedPath = await firstAsyncValue(ipfs.name.resolve(`/ipns/${resolveName}`));
  if (typeof resolvedPath !== "string" || !resolvedPath.startsWith("/ipfs/")) {
    throw new Error(`Unable to resolve IPNS name: ${ipnsName}`);
  }

  const cid = resolvedPath.replace("/ipfs/", "");
  const timestamp = Date.now();
  ipnsCache.set(ipnsName, { cid, timestamp });
  ipnsCache.set(resolveName, { cid, timestamp });

  return cid;
}

async function handleIPNSRequest(res, pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const ipnsName = segments[1];

  if (!ipnsName) {
    return writeText(res, 400, "Missing IPNS name in /ipns/<name>/...");
  }

  try {
    const cid = await resolveIpnsNameToCid(ipnsName);
    const pathCandidates = gatewayCandidates(segments, 2, pathname);
    const { content, filePath } = await fetchFromIpfsByCid(cid, pathCandidates);

    res.statusCode = 200;
    setGatewayHeaders(res, filePath, "public, max-age=300");
    res.setHeader("X-IPFS-Path", `/ipfs/${cid}/${filePath}`);
    res.end(content);
  } catch (error) {
    if (error instanceof MissingIpfsConfigError) {
      return writeText(res, 503, error.message);
    }

    console.error("IPNS resolution error:", error);
    writeText(res, 404, "IPNS name not found or resolution failed");
  }
}

async function handleDeployRequest(req, res) {
  if (!hasValidDeploySecret(req)) {
    return writeText(res, 401, "Unauthorized");
  }

  try {
    const carData = await readRequestBody(req, MAX_CAR_UPLOAD_BYTES);
    if (!carData.length) {
      return writeText(res, 400, "Missing CAR payload");
    }

    const ipfs = getIpfsClient();
    const importResult = ipfs.dag.import([carData], { pinRoots: true });

    let rootCid = "";
    for await (const item of importResult) {
      const cid = item?.root?.cid || (item?.root && item?.cid ? item.cid : null);
      if (cid) {
        rootCid = cid.toString();
        break;
      }
    }

    if (!rootCid) {
      throw new Error("No root CID returned from CAR import");
    }

    console.log(`Deployed to IPFS: ${rootCid}`);
    writeJson(res, 200, { cid: rootCid });
  } catch (error) {
    if (error instanceof MissingIpfsConfigError) {
      return writeText(res, 503, error.message);
    }

    console.error("Deploy error:", error);
    writeJson(res, 500, { error: error.message || "Deployment failed" });
  }
}

async function extractPublishedName(publishResult, fallbackName) {
  const resolved = await firstAsyncValue(publishResult);

  if (!resolved) {
    return fallbackName;
  }

  if (typeof resolved === "string") {
    return resolved;
  }

  if (typeof resolved?.name === "string") {
    return resolved.name;
  }

  return fallbackName;
}

async function handleIPNSPublish(req, res) {
  if (!hasValidDeploySecret(req)) {
    return writeText(res, 401, "Unauthorized");
  }

  try {
    const body = await readJsonBody(req);
    const key = typeof body.key === "string" ? body.key.trim() : "";
    const cid = normalizeCid(body.cid);

    if (!key || !cid) {
      return writeText(res, 400, "Missing key or cid");
    }

    const ipfs = getIpfsClient();
    console.log(`Publishing IPNS: ${key} -> ${cid}`);
    const publishResult = await ipfs.name.publish(`/ipfs/${cid}`, { key });
    const ipnsName = await extractPublishedName(publishResult, key);

    // Clear stale entries so the next request resolves fresh values.
    ipnsCache.delete(key);
    ipnsCache.delete(ipnsName);
    keyAliasCache.timestamp = 0;

    console.log(`IPNS published: ${ipnsName}`);
    writeJson(res, 200, { ipns: ipnsName, cid });
  } catch (error) {
    if (error instanceof MissingIpfsConfigError) {
      return writeText(res, 503, error.message);
    }

    console.error("IPNS publish error:", error);
    writeJson(res, 500, { error: error.message || "IPNS publish failed" });
  }
}

async function prepareNextHandler() {
  if (dev) {
    const app = next({ dev });
    await app.prepare();
    return app.getRequestHandler();
  }

  const forceStaticMode = process.env.NEXT_SERVER_MODE === "static";
  const forceNextMode = process.env.NEXT_SERVER_MODE === "next";

  if (forceStaticMode) {
    return null;
  }

  if (!forceNextMode) {
    try {
      await fs.access(path.join(staticDir, "index.html"));
      // Prefer static exports in production when they exist.
      return null;
    } catch {
      // Fall through and start Next's request handler.
    }
  }

  const app = next({ dev });
  await app.prepare();
  return app.getRequestHandler();
}

async function bootstrap() {
  try {
    nextHandler = await prepareNextHandler();
  } catch (error) {
    if (dev) {
      throw error;
    }

    console.warn("Next handler unavailable; falling back to static export serving:", error);
    nextHandler = null;
  }

  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url || "/", true);
      const pathname = parsedUrl.pathname || "/";

      if (pathname.startsWith("/ipfs/")) {
        return await handleIPFSRequest(res, pathname);
      }

      if (pathname.startsWith("/ipns/")) {
        return await handleIPNSRequest(res, pathname);
      }

      if (pathname === "/api/deploy" && req.method === "POST") {
        return await handleDeployRequest(req, res);
      }

      if (pathname === "/api/ipns/publish" && req.method === "POST") {
        return await handleIPNSPublish(req, res);
      }

      if (nextHandler) {
        return nextHandler(req, res, parsedUrl);
      }

      return await serveStaticExport(pathname, res);
    } catch (error) {
      if (error instanceof MissingIpfsConfigError) {
        return writeText(res, 503, error.message);
      }

      console.error("Server error:", error);
      writeText(res, 500, "Internal Server Error");
    }
  }).listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
}

bootstrap();
