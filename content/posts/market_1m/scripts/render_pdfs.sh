#!/bin/bash
# Prints the three PDFs from the already-built HTML in export/_build/ (pandoc + wrap_html.py steps are done).
# Uses the first working Chromium. The snap build fails here (snap-confine); the playwright headless shell is the fallback.
cd /home/revlin/Projects/Currents/market_1m || exit 1
CH=/snap/bin/chromium
"$CH" --version >/dev/null 2>&1 || CH=/home/revlin/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell
for pair in "selloff:selloff-nov20-recovery-nov23" "onramp:self-directed-trading-account-crypto-onramp" "social:social-computing-draft"; do
  src="${pair%%:*}"; out="${pair##*:}"
  "$CH" --headless --no-sandbox --disable-gpu --print-to-pdf="$PWD/export/$out.pdf" --no-pdf-header-footer "file://$PWD/export/_build/$src.html" 2>&1 | tail -1
  pdftotext "export/$out.pdf" - | head -40
done
