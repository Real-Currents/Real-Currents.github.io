#!/usr/bin/env python3
"""Fetch Mon 2026-11-23 1-minute bars (and Fri 2026-11-20 NVDA + daily context) from Yahoo v8.
Epochs are computed from the exact America/New_York dates, then verified against the first timestamp."""
import json, time, sys, urllib.request, urllib.error
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

NY = ZoneInfo("America/New_York")
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

def epoch(y, m, d, hh=0, mm=0):
    return int(datetime(y, m, d, hh, mm, tzinfo=NY).timestamp())

def fetch(sym, p1, p2, interval, out, expect_date):
    url = (f"https://query1.finance.yahoo.com/v8/finance/chart/{urllib.request.quote(sym)}"
           f"?period1={p1}&period2={p2}&interval={interval}&includePrePost=false")
    import os
    if os.path.exists(out) and os.path.getsize(out) > 500:
        print(f"{sym} {interval} already on disk: {out}")
        return True
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                raw = r.read()
            j = json.loads(raw)
            res = j["chart"]["result"][0]
            ts = res["timestamp"]
            first = datetime.fromtimestamp(ts[0], NY)
            ok = first.strftime("%Y-%m-%d") == expect_date
            with open(out, "wb") as f:
                f.write(raw)
            print(f"{sym} {interval} n={len(ts)} first={first.isoformat()} last={datetime.fromtimestamp(ts[-1], NY).isoformat()} date_ok={ok} -> {out}")
            return ok
        except Exception as e:
            wait = 30 * (attempt + 1)
            print(f"{sym} attempt {attempt+1} failed: {e}; sleeping {wait}s", file=sys.stderr)
            time.sleep(wait)
    print(f"{sym} FAILED after retries", file=sys.stderr)
    return False

if __name__ == "__main__":
    mon = (2026, 11, 23)
    p1 = epoch(*mon, 0, 0)
    p2 = epoch(*mon, 0, 0) + 86400
    for sym in ["AVGO", "GOOG", "META", "SNAP", "NVDA"]:
        fetch(sym, p1, p2, "1m", f"data/{sym}_20261123_1m.json", "2026-11-23")
        time.sleep(3)
    # Friday NVDA 1m (not previously on disk)
    f1 = epoch(2026, 11, 20, 0, 0)
    fetch("NVDA", f1, f1 + 86400, "1m", "data/NVDA_20261120_1m.json", "2026-11-20")
    time.sleep(3)
    # Dailies Nov 16-24 (covers Fri close, Mon, and Tue if present)
    d1 = epoch(2026, 11, 16, 0, 0)
    d2 = epoch(2026, 11, 25, 0, 0)
    for sym in ["^VIX", "^GSPC", "NVDA", "AVGO", "GOOG", "META", "SNAP", "^TNX"]:
        fetch(sym, d1, d2, "1d", f"data/{sym.replace('^','')}_daily_20261116_1124.json", "2026-11-16")
        time.sleep(3)
