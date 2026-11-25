#!/usr/bin/env python3
"""pandoc -> body -> harness/pdf-template.html wrapper. Usage: build_html.py <doc.qmd> <out.html>
Run from /home/revlin/Projects/Currents/market_1m. Step 3 (chromium print-to-pdf) is run separately."""
import re, subprocess, sys, os

src, out = sys.argv[1], sys.argv[2]
raw = out.replace(".html", ".raw.html")
subprocess.run(["/home/revlin/bin/pandoc", src, "-f", "markdown+yaml_metadata_block", "-t", "html5", "-s",
                "--resource-path=docs:.", "--embed-resources", "-o", raw], check=True)
h = open(raw, encoding="utf-8").read()
title = re.search(r'<h1 class="title">.*?</h1>', h, re.S)
sub = re.search(r'<p class="subtitle">.*?</p>', h, re.S)
auth = re.search(r'<p class="author">.*?</p>', h, re.S)
date = re.search(r'<p class="date">.*?</p>', h, re.S)
body = re.search(r"<body[^>]*>(.*)</body>", h, re.S).group(1)
body = re.sub(r'<header id="title-block-header">.*?</header>', "", body, flags=re.S)
cover = '<div class="cover">' + "".join(m.group(0) for m in (title, sub, auth, date) if m) + "</div>"
tpl = open("harness/pdf-template.html", encoding="utf-8").read()
extra = """
table { border-collapse: collapse; margin: 6pt 0 12pt 0; font-size: 8.5pt; width: 100%; page-break-inside: avoid; }
th, td { border-bottom: 0.4pt solid #bbb; padding: 2pt 4pt; text-align: right; }
th:first-child, td:first-child { text-align: left; }
thead th { border-bottom: 0.8pt solid #444; }
img { max-width: 100%; }
figure { margin: 8pt 0; } figcaption { font-size: 8.5pt; color: #444; }
"""
tpl = tpl.replace("</style>", extra + "</style>")
open(out, "w", encoding="utf-8").write(tpl.replace("<!-- BODY_PLACEHOLDER -->", cover + body))
print("wrote", out, os.path.getsize(out))
