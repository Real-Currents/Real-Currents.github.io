#!/bin/bash
# Yahoo v8 fetch via curl (Windows-style UA worked when urllib/Linux UA got 429). Epochs computed from exact NY dates.
cd /home/revlin/Projects/Currents/market_1m || exit 1
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
ep() { TZ=America/New_York date -d "$1" +%s; }
MON1=$(ep "2026-11-23 00:00"); MON2=$(ep "2026-11-24 00:00")
FRI1=$(ep "2026-11-20 00:00"); FRI2=$(ep "2026-11-21 00:00")
D1=$(ep "2026-11-16 00:00");   D2=$(ep "2026-11-25 00:00")
get() { # sym p1 p2 interval out
  local sym="$1" p1="$2" p2="$3" iv="$4" out="$5" code n
  if [ -s "$out" ] && [ "$(stat -c %s "$out")" -gt 500 ]; then echo "$sym $iv on disk: $out"; return; fi
  for n in 1 2 3 4 5 6; do
    code=$(curl -s -m 30 -A "$UA" "https://query1.finance.yahoo.com/v8/finance/chart/${sym//^/%5E}?period1=$p1&period2=$p2&interval=$iv&includePrePost=false" -o "$out.tmp" -w "%{http_code}")
    if [ "$code" = "200" ]; then mv "$out.tmp" "$out"; echo "$sym $iv OK $out p1=$p1 p2=$p2"; return; fi
    echo "$sym $iv attempt $n http $code; sleeping $((20*n))s"; sleep $((20*n))
  done
  rm -f "$out.tmp"; echo "$sym $iv FAILED"
}
for s in AVGO GOOG META SNAP NVDA; do get $s $MON1 $MON2 1m data/${s}_20261123_1m.json; sleep 3; done
get NVDA $FRI1 $FRI2 1m data/NVDA_20261120_1m.json; sleep 3
for s in ^VIX ^GSPC ^TNX NVDA AVGO GOOG META SNAP; do get $s $D1 $D2 1d data/${s#^}_daily_20261116_1124.json; sleep 3; done
echo ALLDONE
