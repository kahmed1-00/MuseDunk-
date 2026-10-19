# Build Log

## 2026-10-18 — Plan
Pull the Dunk Meter prototype out of my portfolio into its own repo and grow it
into what the portfolio roadmap describes: the arcade game plus a StatsMuse-style
question box. Real dunk GIFs and live NBA data stay on the roadmap.

MVP: meter, 10 shots, score, saved best score, streak bonus, stats question box
from local data.

## 2026-10-18 — First build (Claude, claude.ai)
I was short on time, so I asked Claude in claude.ai to generate the starting files
and then moved the repo into Claude Code for the rest of the work.

**Changes:**
- CLAUDE.md with the project description, stack, and working rules
- Dunk Meter (index.html, style.css, game.js): moving bar, random green zone,
  10 shots, Play Again, best score in localStorage
- Streak bonus: dunks in a row score 1, 2, 3... points; bar speeds up and the
  zone shrinks as the streak grows; a miss resets it
- Stats box (stats.js, statsbox.js): 20 players with 2024-25 averages; answers
  player names, "most points/rebounds/assists", "top N", and team names
- Space bar is ignored while typing in the question box so it doesn't fire a shot
- Data is a JS file instead of JSON + fetch, because fetch is blocked when opening
  index.html straight from disk

**Checked before committing:** ran each example question through the answer code
and confirmed the leaders and top-5 order match the data file.

**Still to verify myself:**
- [ ] Space stops the bar and score only goes up on green
- [ ] Shots count down from 10, round ends, Play Again resets
- [ ] Best score survives a refresh
- [ ] Works on my phone
- [ ] Spot-check 3 players in stats.js against basketball-reference.com
      (numbers were written from memory and may be off)

## 2026-10-18 — Highlight reel (Claude, claude.ai)
**Asked for:** signature-move GIFs: LeBron dunk, Curry shot, Kobe fadeaway,
KD midrange jumper, SGA layup.

**Changes:**
- highlights.js: one entry per player/move with an empty `gif` slot
- New "Highlight reel" section showing all five moves
- Each dunk in the game plays the next move under the SHOOT button
- Stats box shows the player's move with their stat card; "Kobe" works even
  though he isn't in the stats data
- Only https links ending in .gif are shown as images; anything else falls back
  to the styled move card

**Why no GIFs yet:** NBA footage is licensed, so I'm not copying clips into the
repo. I'll paste GIPHY "GIF Link" URLs (NBA's official GIPHY channel) into the
`gif` slots myself.

**To verify:** every move card shows, a dunk plays one, "Kobe" and "curry" in the
stats box show the move.

## 2026-10-18 — Real highlight clips
**Asked for:** use five GIFs I found: Curry, Kobe, KD, SGA, and Kyrie.

**Changes:**
- GIFs were 47 MB total, so they were converted to looping MP4s in clips/
  (about 3 MB total) and play muted on loop like GIFs
- Kyrie Irving added as a highlight (that GIF was Kyrie, not LeBron)
- SGA's clip is a dunk, so his move is now "Dunk" instead of "Layup"
- LeBron keeps the placeholder card until I find a dunk clip

**To verify:** all five clips play in the reel, on dunks, and in the stats box
("curry", "kobe", "kyrie").

## 2026-10-18 — README and poster frames
- Added README.md with screenshots of the game, highlight reel, and stats box
- Found the clips showed as empty boxes in a browser that can't play MP4, so each
  clip now has a still frame (clips/*.jpg) shown until the video plays

## 2026-10-18 — Dunk reel
**Asked for:** change the highlights to the best dunks: LeBron, KD, Anthony
Edwards, Giannis, Michael Jordan, and Kobe.

**Changes:**
- Replaced all clips with six dunk GIFs I found, converted to small looping MP4s
- Renamed "Highlight reel" to "Dunk reel"
- Stats box now shows the dunk for Edwards and Giannis too; "Jordan" added as an
  example question
- README and screenshots updated

**Found while testing:** asking "kd" returns "didn't get that" because only full
names and last names are matched. Added to the roadmap: nicknames (KD, MJ, Bron).
