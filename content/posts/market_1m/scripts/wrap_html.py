#!/usr/bin/env python3
"""usage: wrap_html.py raw.html out.html  -- drop pandoc title header, build cover div, wrap in harness/pdf-template.html"""
import re, sys
raw = open(sys.argv[1], encoding="utf-8").read()
hdr = re.search(r'<header id="title-block-header">(.*?)</header>', raw, re.S)
body = re.search(r'<body[^>]*>(.*)</body>', raw, re.S).group(1)
body = re.sub(r'<header id="title-block-header">.*?</header>', '', body, flags=re.S)
cover = '<div class="cover">' + (hdr.group(1) if hdr else '') + '</div>'
tpl = open("harness/pdf-template.html", encoding="utf-8").read()
extra = """
table { border-collapse: collapse; width: 100%; font-size: 7.6pt; line-height: 1.3; margin: 6pt 0 10pt 0; page-break-inside: avoid; }
th, td { border-bottom: 0.4pt solid #ccc; padding: 2pt 4pt; text-align: right; vertical-align: top; }
th { border-bottom: 0.8pt solid #666; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 700; }
th:first-child, td:first-child { text-align: left; }
pre, pre code { font-size: 7.5pt; white-space: pre-wrap; background: #f4f4f4; }
img { max-width: 100%; }
"""
tpl = tpl.replace("</style>", extra + "</style>")
open(sys.argv[2], "w", encoding="utf-8").write(tpl.replace("<!-- BODY_PLACEHOLDER -->", cover + body))
print("wrote", sys.argv[2])
