#!/bin/bash
#
# Crops the dead padding out of the raw iPad captures in assets/screenshots-raw/
# and writes downscaled, slot-sized assets into public/screenshots/.
#
# Why headless Chrome: a full-screen iPad capture is mostly empty space, and it
# needs a top-anchored crop rather than a centered one. `sips` can only crop from
# the center, and this machine has no ImageMagick — so each source is rendered
# into a fixed-size frame at a negative offset and screenshotted.
#
# After changing any crop, update the width/height props where that shot is used.
#
# Usage: bash assets/crop-screenshots.sh   (from the repo root)
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/assets/screenshots-raw"
DEST="$ROOT/public/screenshots"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# output name   source file            cropTop cropBottom outWidth
JOBS=(
  "kid-home     kid-home.png             0  1580  900"   # hero: search, Watch, three tag rows
  "kid-browse   kid-home.png          1950  2680  700"   # step 3: category chips + All Videos
  "kid-player   kid-player-bare.png    780  1980  900"   # Privacy/player: video, no chrome
  "sources      source-detail.png      130  1080  700"   # step 1: source + library breakdown
  "trust        source-detail.png     1600  2165  800"   # auto-sync band: Trust toggles
  "tags         tags.png                 0  1300  800"   # Tags section
  "settings     settings-backup.png    900  2080  700"   # export/import
  "library      library.png            290  1140  700"   # stand-in for step 2 until
                                                         # the Review queue has items
  "pin-lock     pin-lock.png           560  2110  760"   # Privacy: PIN sheet with Face ID
)

for job in "${JOBS[@]}"; do
  read -r name src top bottom outw <<< "$job"
  cropH=$((bottom - top))
  outh=$(python3 -c "print(round($cropH * $outw / 2048))")
  offset=$(python3 -c "print(-round($top * $outw / 2048))")

  cat > "$TMP/$name.html" <<HTML
<!doctype html><meta charset="utf-8">
<style>
  html,body{margin:0;padding:0;background:#000;overflow:hidden}
  .frame{width:${outw}px;height:${outh}px;overflow:hidden;position:relative}
  img{position:absolute;top:${offset}px;left:0;width:${outw}px;height:auto;display:block}
</style>
<div class="frame"><img src="file://$SRC/$src"></div>
HTML

  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --allow-file-access-from-files \
    --window-size="$outw,$outh" \
    --screenshot="$DEST/$name.png" "$TMP/$name.html" >/dev/null 2>&1

  printf "%-12s %sx%s\n" "$name.png" "$outw" "$outh"
done
