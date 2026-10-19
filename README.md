
# 🏀 MuseDunk Arcade

A small NBA arcade site I built for myself: a timing game where every dunk plays a
real highlight, plus a StatsMuse-style box you can ask NBA stat questions.

**▶ Play it:** https://kahmed1-00.github.io/MuseDunk-/

Built for **TCSS 490 (UW Tacoma, Autumn 2026), Artifact 2: Something You Will Use**.

---

## Features

### 1. Dunk Meter
[Dunk Meter game] 

<img width="688" height="667" alt="game" src="https://github.com/user-attachments/assets/6bcc2e05-e179-40a1-bcf4-7f239861de40" />


- A white bar slides back and forth. Press **Space** or tap **SHOOT** to stop it.
- Land in the **green zone** for a dunk. Miss and it's an airball.
- **10 shots** per round, then **Play Again**.
- **Streak bonus:** dunks in a row score 1, 2, 3... points. The bar speeds up and the
  green zone shrinks as the streak grows. A miss resets it.
- The green zone jumps to a new spot after every shot.
- **Best score** is saved in your browser and survives a refresh.
- Every dunk plays the next highlight clip right under the button.

### 2. Dunk reel
![Dunk reel](<img width="688" height="490" alt="highlights" src="https://github.com/user-attachments/assets/5a692c0a-0ecc-49b3-8167-fcf55f0aa9b8" />]())

Dunks from LeBron James, Kevin Durant, Anthony Edwards, Giannis Antetokounmpo,
Michael Jordan, and Kobe Bryant. Every dunk you hit in the game plays the next one.

The clips started as GIFs. I converted them to looping, muted MP4s so the page
loads fast, and each one has a still frame so it never shows an empty box.

### 3. Stats box
![Stats box answering top 5 scorers](<img width="688" height="899" alt="stats-player" src="https://github.com/user-attachments/assets/91a1ce58-826e-46b8-93fb-374e54082619" /><img width="688" height="513" alt="stats" src="https://github.com/user-attachments/assets/7fd4d16b-25c2-4d84-9424-80d401133a4a" />
)

Ask questions in plain English. Click any example chip or type your own:

| You ask | You get |
|---|---|
| `Who scored the most points?` | The points leader's stat card |
| `Most assists` / `Most rebounds` | That stat's leader |
| `Top 5 scorers` / `Top 3 assists` | A ranked list |
| `LeBron James`, `edwards`, `giannis` | Player stat card + their dunk |
| `Kobe`, `Jordan` | Their dunk (no season stats in the data) |
| `Celtics`, `Lakers`, `OKC` | Players from that team |

![Stats box showing a player card with their dunk](screenshots/stats-player.png)

> Stats are 2024-25 regular-season averages for 20 players, stored locally in
> `stats.js`. They're approximate and may not be current.

---

## How to run it

**Online:** open https://kahmed1-00.github.io/MuseDunk-/

**On your computer:** download or clone the repo, then double-click `index.html`.
No install, no build step.

```bash
git clone https://github.com/kahmed1-00/MuseDunk-.git
```

---

## How it's built

Plain **HTML, CSS, and vanilla JavaScript**, hosted on **GitHub Pages**.

| File | What it does |
|---|---|
| `index.html` | Page layout: game, highlight reel, stats box, roadmap |
| `style.css` | Dark arcade theme with orange accents, phone-friendly |
| `game.js` | Dunk Meter logic: bar movement, hit check, streak, best score |
| `highlights.js` | List of players, moves, and their clips |
| `stats.js` | Local player data (points, rebounds, assists) |
| `statsbox.js` | Reads your question and finds the answer |
| `clips/` | Highlight videos (`.mp4`) and still frames (`.jpg`) |
| `CLAUDE.md` | Project context and rules for the AI coding agent |
| `LOG.md` | Build log: what I planned and what changed |

### Add or change a highlight
Drop a clip in `clips/` and add a line in `highlights.js`:
```js
{ player: "Stephen Curry", move: "Dunk", icon: "🎯", clip: "clips/curry.mp4", gif: "" },
```
Or paste a GIPHY "GIF Link" into `gif` instead of using `clip`.

---

## Roadmap
- [ ] Live NBA data source instead of the local file
- [ ] Smarter questions (by position, player vs player)
- [ ] Nicknames in the stats box (KD, MJ, Bron)

## Built with AI
Planned and built with Claude, with the work tracked in `CLAUDE.md` and `LOG.md`.
I tested the game and answers myself and logged what I checked.
