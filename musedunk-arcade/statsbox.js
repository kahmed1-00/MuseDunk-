// StatsMuse-style question box, answering from PLAYERS (stats.js)
const form = document.getElementById("askForm");
const input = document.getElementById("askInput");
const answer = document.getElementById("answer");
const chips = document.getElementById("chips");

const EXAMPLES = [
  "Who scored the most points?",
  "Most assists",
  "Most rebounds",
  "Top 5 scorers",
  "LeBron James",
  "Kobe",
  "Celtics",
];

const STAT_NAMES = { pts: "points", reb: "rebounds", ast: "assists" };

const TEAM_NAMES = {
  OKC: "thunder", MIL: "bucks", DEN: "nuggets", LAL: "lakers", MIN: "timberwolves",
  BOS: "celtics", PHX: "suns", PHI: "76ers", DET: "pistons", NYK: "knicks",
  DAL: "mavericks", GSW: "warriors", SAS: "spurs", ATL: "hawks", CLE: "cavaliers",
  MEM: "grizzlies", SAC: "kings",
};

// Escape text before putting it in HTML
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function playerCard(p) {
  return `
    <div class="player">
      <h3>${esc(p.name)}</h3>
      <div class="meta">${esc(p.team)} · ${esc(p.pos)} · 2024-25 averages</div>
      <div class="nums">
        <div><b>${p.pts.toFixed(1)}</b><small>PTS</small></div>
        <div><b>${p.reb.toFixed(1)}</b><small>REB</small></div>
        <div><b>${p.ast.toFixed(1)}</b><small>AST</small></div>
      </div>
    </div>`;
}

function rankList(stat, n) {
  const top = [...PLAYERS].sort((a, b) => b[stat] - a[stat]).slice(0, n);
  return `<p>Top ${n} in ${STAT_NAMES[stat]} per game:</p><ol class="rank">` +
    top.map((p) => `<li>${esc(p.name)} (${esc(p.team)}) <span>${p[stat].toFixed(1)}</span></li>`).join("") +
    "</ol>";
}

function whichStat(q) {
  if (/assist|ast|passer|dimes/.test(q)) return "ast";
  if (/rebound|reb|boards/.test(q)) return "reb";
  if (/point|pts|scor/.test(q)) return "pts";
  return null;
}

function findPlayers(q) {
  // match full name, or last name, or first name (3+ letters)
  return PLAYERS.filter((p) => {
    const name = p.name.toLowerCase();
    if (q.includes(name)) return true;
    return name.split(/[\s-]+/).some((part) => part.length >= 3 && new RegExp("\\b" + part + "\\b").test(q));
  });
}

function findTeam(q) {
  for (const [abbr, nick] of Object.entries(TEAM_NAMES)) {
    if (q.includes(nick) || new RegExp("\\b" + abbr.toLowerCase() + "\\b").test(q)) return abbr;
  }
  return null;
}

function respond(raw) {
  const q = raw.toLowerCase().trim();
  if (!q) return `<p>Type a question first.</p>`;

  const stat = whichStat(q);

  // "top 5 scorers", "top 3 assists"
  const topMatch = q.match(/top\s*(\d+)/);
  if (topMatch) {
    const n = Math.min(Math.max(parseInt(topMatch[1], 10), 1), PLAYERS.length);
    return rankList(stat || "pts", n);
  }

  // specific player(s)
  const players = findPlayers(q);
  if (players.length) {
    return players.map((p) => {
      const h = highlightFor(p.name);
      return playerCard(p) + (h ? highlightHTML(h) : "");
    }).join("");
  }

  // highlight-only players (like Kobe, not in the stats data)
  const hlOnly = HIGHLIGHTS.filter((h) =>
    h.player.toLowerCase().split(/[\s-]+/).some((part) => part.length >= 3 && new RegExp("\\b" + part + "\\b").test(q)));
  if (hlOnly.length) {
    return `<p>No season stats in this data, but here's the signature move:</p>` + hlOnly.map(highlightHTML).join("");
  }

  // "most / leader / best / highest"
  if (stat && /most|lead|best|highest|top|who/.test(q)) {
    const leader = [...PLAYERS].sort((a, b) => b[stat] - a[stat])[0];
    return `<p>Most ${STAT_NAMES[stat]} per game in this data:</p>` + playerCard(leader);
  }

  // team
  const team = findTeam(q);
  if (team) {
    const roster = PLAYERS.filter((p) => p.team === team);
    return `<p>${team} players in this data:</p>` + roster.map(playerCard).join("");
  }

  return `<p>I didn't get that. Try one of the example questions above, a player name, or a team.</p>`;
}

function ask(q) {
  input.value = q;
  answer.innerHTML = respond(q);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ask(input.value);
});

EXAMPLES.forEach((ex) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = ex;
  b.addEventListener("click", () => ask(ex));
  chips.appendChild(b);
});
