// Signature-move highlight reel.
// `clip` = a local looping video in clips/ (GIFs converted to .mp4 to stay small).
// `gif`  = or a GIPHY "GIF Link" URL (ends in .gif).
// Leave both empty and a styled move card shows instead.
const HIGHLIGHTS = [
  { player: "LeBron James",          move: "Dunk", icon: "💥", clip: "clips/lebron.mp4",  gif: "" },
  { player: "Kevin Durant",          move: "Dunk", icon: "🧊", clip: "clips/kd.mp4",      gif: "" },
  { player: "Anthony Edwards",       move: "Dunk", icon: "🐜", clip: "clips/edwards.mp4", gif: "" },
  { player: "Giannis Antetokounmpo", move: "Dunk", icon: "🦌", clip: "clips/giannis.mp4", gif: "" },
  { player: "Michael Jordan",        move: "Dunk", icon: "🐐", clip: "clips/jordan.mp4",  gif: "" },
  { player: "Kobe Bryant",           move: "Dunk", icon: "🐍", clip: "clips/kobe.mp4",    gif: "" },
];

function highlightFor(name) {
  return HIGHLIGHTS.find((h) => h.player.toLowerCase() === name.toLowerCase());
}

// Escape text before putting it in HTML
function hEsc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function highlightHTML(h) {
  const media = /^clips\/[\w-]+\.mp4$/.test(h.clip || "")
    ? `<video src="${hEsc(h.clip)}" poster="${hEsc(h.clip.replace(".mp4", ".jpg"))}" autoplay loop muted playsinline preload="metadata"></video>`
    : /^https:\/\/[^\s"'<>]+\.gif(\?[^\s"'<>]*)?$/i.test(h.gif)
    ? `<img src="${hEsc(h.gif)}" alt="${hEsc(h.player)} ${hEsc(h.move)}" loading="lazy">`
    : `<div class="hl-placeholder"><span>${h.icon}</span>${hEsc(h.move)}</div>`;
  return `<div class="hl">${media}<div class="hl-cap"><b>${hEsc(h.player)}</b> · ${hEsc(h.move)}</div></div>`;
}
