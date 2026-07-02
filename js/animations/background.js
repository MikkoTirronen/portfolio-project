// --- CREATE CANVAS ---------------------------------------------------------
const canvas = document.getElementById("bg-animation");
const ctx = canvas.getContext("2d");

// Visible canvas styling
// Object.assign(canvas.style, {
//   position: "fixed",
//   inset: 0,
//   width: "100dvw",
//   height: "100dvh",
//   zIndex: "-1",
//   pointerEvents: "none",
// });

// --- BUFFER CANVAS (STATIC CONTENT) ---------------------------------------
const buffer = document.createElement("canvas");
const bctx = buffer.getContext("2d");

// --- TILE CLASS ------------------------------------------------------------
class Tile {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    // optional stroke — keep thin to reduce cost
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      Math.floor(this.x) + 0.5,
      Math.floor(this.y) + 0.5,
      Math.floor(this.w),
      Math.floor(this.h)
    );
  }
}

// --- PALETTE ---------------------------------------------------------------
const PALETTE = [
  "#6e8570",
  "#8ea7ab",
  "#a48d7b",
  "#8c5f5f",
  "#4b5773",
  "#b7a98a",
  "#2f6d72",
  "#81758b",
  "#a88867",
];

const randomColor = () =>
  PALETTE[Math.floor(Math.random() * PALETTE.length)];

// --- RECURSIVE DIVIDE ------------------------------------------------------
let allTiles = [];

function divide(x, y, w, h, depth, direction) {
  if (w < 6 || h < 6) return;

  const split = Math.random() * 0.6 + 0.2;
  let tiles;

  if (direction === 0) {
    tiles = [
      { x, y, w: w * split, h },
      { x: x + w * split, y, w: w - w * split, h },
    ];
    direction = 1;
  } else {
    tiles = [
      { x, y, w, h: h * split },
      { x, y: y + h * split, w, h: h - h * split },
    ];
    direction = 0;
  }

  for (const t of tiles) {
    if (depth < 3 && Math.random() < 0.6) {
      divide(t.x, t.y, t.w, t.h, depth + 1, direction);
    } else {
      allTiles.push(new Tile(t.x, t.y, t.w, t.h, randomColor()));
    }
  }
}

// --- INITIALIZE & STATIC RENDER -------------------------------------------
function resizeCanvas() {
  const dpr = 1;

  canvas.width = innerWidth 
  canvas.height = innerHeight 
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  buffer.width = innerWidth;
  buffer.height = innerHeight;

  allTiles.length = 0;
  divide(0, 0, buffer.width, buffer.height, 0, 0);

  // render tiles ONCE
  bctx.clearRect(0, 0, buffer.width, buffer.height);
  bctx.imageSmoothingEnabled = false;

  for (const tile of allTiles) {
    tile.draw(bctx);
  }
}

resizeCanvas();
addEventListener("resize", resizeCanvas);

// --- LOW-POWER ANIMATION LOOP ---------------------------------------------
let lastTime = 0;

function animate(time) {
  // ~30fps cap
  if (time - lastTime < 33) {
    requestAnimationFrame(animate);
    return;
  }
  lastTime = time;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const t = time * 0.0003;
  const driftX = Math.sin(t) * 30;
  const driftY = Math.cos(t * 0.7) * 30;
  const rotation = Math.sin(t * 0.5) * 0.03;
  const scale = 1 + Math.sin(t * 0.8) * 0.03;

  ctx.save();
  ctx.translate(innerWidth / 2, innerHeight / 2);
  ctx.scale(scale, scale);
  ctx.rotate(rotation);
  ctx.translate(-innerWidth / 2 + driftX, -innerHeight / 2 + driftY);

  // single draw call 🔥
  ctx.drawImage(buffer, 0, 0);

  ctx.restore();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
