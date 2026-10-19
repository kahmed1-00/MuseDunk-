// Dunk Meter game
const SHOTS_PER_ROUND = 10;
const BASE_ZONE = 16;   // green zone width in %
const MIN_ZONE = 6;
const BASE_SPEED = 1.3; // % per frame

const el = {
  bar: document.getElementById("bar"),
  zone: document.getElementById("zone"),
  msg: document.getElementById("msg"),
  btn: document.getElementById("shootBtn"),
  shots: document.getElementById("shots"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  best: document.getElementById("best"),
  hl: document.getElementById("dunkHighlight"),
};
let hlIndex = 0;

let state = {
  pos: 0, dir: 1,
  shots: SHOTS_PER_ROUND, score: 0, streak: 0,
  zoneLeft: 42, zoneWidth: BASE_ZONE,
  over: false,
  best: loadBest(),
};

function loadBest() {
  try { return Number(localStorage.getItem("musedunk-best")) || 0; }
  catch (e) { return 0; }
}
function saveBest(n) {
  try { localStorage.setItem("musedunk-best", String(n)); } catch (e) {}
}

function render() {
  el.shots.textContent = state.shots;
  el.score.textContent = state.score;
  el.streak.textContent = state.streak;
  el.best.textContent = state.best;
  el.zone.style.left = state.zoneLeft + "%";
  el.zone.style.width = state.zoneWidth + "%";
}

function setMsg(text, cls) {
  el.msg.textContent = text;
  el.msg.className = "msg" + (cls ? " " + cls : "");
}

function tick() {
  if (!state.over) {
    const speed = BASE_SPEED + state.streak * 0.15;
    state.pos += state.dir * speed;
    if (state.pos >= 99) { state.pos = 99; state.dir = -1; }
    if (state.pos <= 0) { state.pos = 0; state.dir = 1; }
    el.bar.style.left = state.pos + "%";
  }
  requestAnimationFrame(tick);
}

function newRound() {
  state.shots = SHOTS_PER_ROUND;
  state.score = 0;
  state.streak = 0;
  state.zoneWidth = BASE_ZONE;
  state.zoneLeft = 42;
  state.over = false;
  el.btn.textContent = "SHOOT";
  setMsg("Ready?");
  el.hl.innerHTML = "";
  render();
}

function shoot() {
  if (state.over) { newRound(); return; }

  const center = state.pos + 0.5; // middle of the 6px bar, roughly
  const hit = center >= state.zoneLeft && center <= state.zoneLeft + state.zoneWidth;

  if (hit) {
    state.streak++;
    state.score += state.streak; // 1, 2, 3... points
    setMsg(state.streak > 1 ? `DUNK! +${state.streak} (streak)` : "DUNK! +1", "good");
    state.zoneWidth = Math.max(MIN_ZONE, BASE_ZONE - state.streak * 1.5);
    // play the next signature move
    el.hl.innerHTML = highlightHTML(HIGHLIGHTS[hlIndex % HIGHLIGHTS.length]);
    hlIndex++;
  } else {
    state.streak = 0;
    state.zoneWidth = BASE_ZONE;
    setMsg("Airball", "bad");
  }

  // move the zone somewhere new
  state.zoneLeft = Math.round(5 + Math.random() * (90 - state.zoneWidth));
  state.shots--;

  if (state.shots <= 0) {
    state.over = true;
    if (state.score > state.best) {
      state.best = state.score;
      saveBest(state.best);
      setMsg(`New best! Final score: ${state.score}`, "final");
    } else {
      setMsg(`Final score: ${state.score}`, "final");
    }
    el.btn.textContent = "PLAY AGAIN";
  }
  render();
}

el.btn.addEventListener("click", shoot);
document.addEventListener("keydown", (e) => {
  // don't steal Space while typing in the stats box
  if (e.code === "Space" && document.activeElement.tagName !== "INPUT") {
    e.preventDefault();
    shoot();
  }
});

render();
tick();

// fill the highlight reel section
document.getElementById("reel").innerHTML = HIGHLIGHTS.map(highlightHTML).join("");
