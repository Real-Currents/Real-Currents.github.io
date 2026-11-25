# Condensed view of the transcript: skips fenced tool blocks, truncates each turn.
# usage: awk -v from=300 -v to=900 -v jmax=900 -v cmax=500 -f slice_transcript.awk file
BEGIN { fence=0; who=""; buf=""; start=0 }
function flush(   lim, s) {
  if (who == "") return
  lim = (who == "John") ? jmax : cmax
  s = buf
  gsub(/[ \t]+/, " ", s)
  if (length(s) > lim) s = substr(s, 1, lim) " [...+" (length(buf) - lim) "ch]"
  printf "L%d %s: %s\n", start, who, s
  who=""; buf=""
}
NR < from { next }
NR > to { exit }
/^### (John|Claude) \(/ { fence = 0; flush(); who = ($2 == "John") ? "John" : "Claude"; start = NR; ts = $3; gsub(/[()]/, "", ts); buf = substr(ts,1,16) " | "; next }
/^#### Tool/ { fence = 0; flush(); next }
/^```/ { fence = !fence; next }
fence { next }
/^###? / { if (who != "") { buf = buf " ## " $0 } ; next }
{ if (who != "" && length($0) > 0) buf = buf " " $0 }
END { flush() }
