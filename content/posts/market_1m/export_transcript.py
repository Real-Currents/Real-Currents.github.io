#!/usr/bin/env python3
"""Write the "Mind/Virus dialectic" chat to Markdown from a claude.ai data export.

Usage (from ~/Projects/Currents/market_1m):
    python3 export_transcript.py MANIFEST.json   # downloads conversations-*.zip, then converts
    python3 export_transcript.py conversations-000.zip
    python3 export_transcript.py conversations.json

Downloading needs your claude.ai sign-in. The script reads it from the
CLAUDE_COOKIE environment variable (the value of the browser's Cookie header,
or just "sessionKey=..."). Set it only for the one command, e.g.
    read -rs CLAUDE_COOKIE && export CLAUDE_COOKIE && python3 export_transcript.py MANIFEST.json; unset CLAUDE_COOKIE
It is never written to disk or printed. Without it, the script prints the link
for you to download in a browser instead, and does not touch the link.

Download links expire 24 hours after creation and may work only once, so the
script streams to a .part file and keeps the zip only if it is complete and valid.

Output: mind-virus-dialectic-transcript.md (in this folder). Downloaded zips go
to ./export/. Tool results longer than CAP characters are truncated and marked.
Standard library only.
"""
import json
import os
import sys
import urllib.error
import urllib.request
import zipfile
from pathlib import Path

CONV_ID = "afb310fe-5456-44be-9f46-6bfcb30f0ee6"
CAP = 4000
HERE = Path(__file__).resolve().parent
OUT = HERE / "mind-virus-dialectic-transcript.md"
DL_DIR = HERE / "export"


def trunc(s):
    if not isinstance(s, str):
        s = json.dumps(s, ensure_ascii=False, indent=1)
    if len(s) <= CAP:
        return s
    return s[:CAP] + f"\n... [truncated, {len(s) - CAP} more characters]"


def block_md(b, who, ts):
    t = b.get("type")
    if t == "text" and b.get("text", "").strip():
        return f"\n### {who} ({ts})\n\n{b['text']}\n"
    if t == "tool_use":
        return f"\n#### Tool call: {b.get('name')} ({ts})\n\n```\n{trunc(b.get('input'))}\n```\n"
    if t == "tool_result":
        c = b.get("content")
        if isinstance(c, list):
            c = "\n".join(x.get("text", "[non-text content]") for x in c if isinstance(x, dict))
        return f"\n#### Tool result ({ts})\n\n```\n{trunc(c)}\n```\n"
    return ""


def download(entry):
    """Download one manifest entry to DL_DIR; return the zip path."""
    DL_DIR.mkdir(exist_ok=True)
    dest = DL_DIR / entry["filename"]
    if dest.exists() and zipfile.is_zipfile(dest):
        print(f"Already downloaded: {dest}")
        return dest
    # The export link is a web page that starts the download in the browser,
    # not a direct file (tested 2026-11-24: HTTP 200 text/html). So open it in
    # the default browser and look for the zip in ~/Downloads.
    for p in (Path.home() / "Downloads").glob(entry["filename"].replace(".zip", "*.zip")):
        if zipfile.is_zipfile(p):
            print(f"Found {p}")
            return p
    if not os.environ.get("CLAUDE_COOKIE"):
        import webbrowser
        webbrowser.open(entry["export_url"])
        sys.exit(f"Opened the {entry['filename']} link in your browser. When it finishes "
                 "downloading to ~/Downloads, rerun this same command.")
    cookie = os.environ.get("CLAUDE_COOKIE", "").strip()
    if not cookie:
        sys.exit(
            "CLAUDE_COOKIE is not set, so I did not try the link (it may work only once).\n"
            f"Either set CLAUDE_COOKIE (see the top of this script) and rerun, or download "
            f"{entry['filename']} in a signed-in browser from:\n{entry['export_url']}\n"
            f"and rerun with the zip path."
        )
    if "=" not in cookie:
        cookie = f"sessionKey={cookie}"
    req = urllib.request.Request(
        entry["export_url"],
        headers={"Cookie": cookie, "User-Agent": "export_transcript.py (personal data export)"},
    )
    part = dest.with_suffix(dest.suffix + ".part")
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            ctype = r.headers.get("Content-Type", "")
            total = int(r.headers.get("Content-Length") or 0)
            print(f"HTTP {r.status}, {ctype or 'no content type'}, {total or 'unknown'} bytes")
            got = 0
            with open(part, "wb") as fh:
                while chunk := r.read(1 << 20):
                    fh.write(chunk)
                    got += len(chunk)
                    if total:
                        print(f"\r  {got * 100 // total}%", end="", flush=True)
            print()
    except urllib.error.HTTPError as e:
        part.unlink(missing_ok=True)
        sys.exit(f"Download failed: HTTP {e.code} {e.reason}. "
                 "A 401/403 usually means the cookie is wrong or expired; "
                 "a 404/410 that the link expired or was already used.")
    if not zipfile.is_zipfile(part):
        head = part.read_bytes()[:200]
        part.unlink()
        sys.exit("The response was not a zip (likely a sign-in page or a block page). "
                 f"First bytes: {head!r}")
    part.rename(dest)
    print(f"Saved {dest}")
    return dest


def load(path):
    """Accept a manifest, a conversations-*.zip, or conversations.json."""
    path = str(path)
    if path.endswith(".zip"):
        with zipfile.ZipFile(path) as z:
            names = [n for n in z.namelist() if n.endswith(".json")]
            print("JSON files in zip:", names)
            name = next((n for n in names if n.endswith("conversations.json")), None) or names[0]
            return json.loads(z.read(name).decode("utf-8"))
    data = json.load(open(path, encoding="utf-8"))
    if isinstance(data, dict) and "data_files" in data:
        entries = [f for f in data["data_files"] if f.get("category") == "conversations"]
        if not entries:
            sys.exit("Manifest lists no 'conversations' file.")
        convs = []
        for e in sorted(entries, key=lambda f: f.get("part", 0)):
            part_data = load(download(e))
            convs.extend(part_data if isinstance(part_data, list) else part_data.get("conversations", []))
        return convs
    return data


def main(path):
    data = load(path)
    if isinstance(data, dict):
        data = data.get("conversations", [data])
    conv = next((c for c in data if isinstance(c, dict) and c.get("uuid") == CONV_ID), None)
    if conv is None:
        sys.exit(f"Conversation {CONV_ID} not found in {path}")
    msgs = sorted(conv.get("chat_messages", []), key=lambda m: m.get("created_at", ""))
    out = [f"# {conv.get('name', 'Mind/Virus dialectic')}\n\n"
           f"Source: claude.ai export, conversation {CONV_ID}. Messages: {len(msgs)}.\n"
           f"Tool results over {CAP} characters are truncated.\n"]
    for m in msgs:
        who = "John" if m.get("sender") == "human" else "Claude"
        ts = m.get("created_at", "")
        blocks = m.get("content") or [{"type": "text", "text": m.get("text", "")}]
        out.extend(block_md(b, who, ts) for b in blocks)
    OUT.write_text("".join(out), encoding="utf-8")
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes, {len(msgs)} messages)")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
