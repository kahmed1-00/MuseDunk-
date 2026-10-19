# MuseDunk Arcade

A small browser NBA arcade site I use myself. Two parts:
1. **Dunk Meter**: a bar slides back and forth; press Space or tap SHOOT to stop it.
   Green zone = dunk. Each dunk plays a signature-move highlight (highlights.js). 10 shots per round. Streak bonus (1, 2, 3... points), the bar
   speeds up and the zone shrinks as the streak grows. Best score saved.
2. **Stats box**: a StatsMuse-style question box ("Who scored the most points?",
   "LeBron James", "Celtics", "Top 5 scorers") that answers from local data in stats.js.

Roadmap (not now): live NBA data source, real dunk GIFs.

## Stack
- Plain HTML, CSS, vanilla JS. No frameworks, no build step.
- Files: index.html, style.css, game.js (Dunk Meter), stats.js (player data),
  statsbox.js (question box), highlights.js (signature moves), clips/ (looping MP4 highlights)
- Data lives in stats.js as a JS array (not JSON + fetch) so it works when
  opening index.html directly from disk.
- Best score in localStorage, wrapped in try/catch.
- Hosted on GitHub Pages from main.

## Rules for working on this
- One feature at a time; I test and commit after each.
- After every change, append a dated entry to LOG.md: what I asked for,
  what changed, anything that broke.
- Must work on phone and desktop.
- Player stats are approximate. Don't invent new numbers without flagging them
  in LOG.md so I can verify them.
