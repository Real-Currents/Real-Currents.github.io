#!/usr/bin/env python3
"""Strip tool-call/tool-result blocks from the transcript, keeping John/Claude text with ORIGINAL line numbers.
Output: notes/transcript_condensed.txt, each kept line prefixed 'L<orig>:'. Read-only on the source."""
import re
src = "mind-virus-dialectic-transcript.md"
out = open("notes/transcript_condensed.txt", "w")
skip = False
infence = False
for i, line in enumerate(open(src, encoding="utf-8"), 1):
    if line.startswith("#### Tool call") or line.startswith("#### Tool result"):
        skip = True
        out.write(f"L{i}: [{line.strip()[5:60]}]\n")
        continue
    if line.startswith("### "):
        skip = False
    if skip:
        continue
    out.write(f"L{i}: {line}" if line.strip() else "")
out.close()
