// --- OFFSCREEN STATIC CANVAS (NEW) -----------------------------------------
const staticCanvas = document.createElement("canvas");
const staticCtx = staticCanvas.getContext("2d");

// --- CREATE CANVAS ---------------------------------------------------------
const canvas = document.createElement("canvas");
canvas.id = "bg-animation";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");

// Canvas styling
Object.assign(canvas.style, {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
  pointerEvents: "none",
});

// --- TILE CLASS -------------------------------------------------------------
class Tile {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }
}

// --- CONTROL VARIABLES -----------------------------------------------------
let wobbleIntensity = 30;
let rotationAmount = 0.03;
let scaleAmount = 0.03;
let recursionDepth = 3;
let showStroke = true;
let animationSpeed = 1;

// --- COLOR PALETTES --------------------------------------------------------
const PALETTES = {
  "Earth Tones": [
    "#6e8570",
    "#8ea7ab",
    "#a48d7b",
    "#8c5f5f",
    "#4b5773",
    "#b7a98a",
    "#2f6d72",
    "#81758b",
    "#a88867",
  ],
  Warm: [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
    "#bdb2ff",
    "#ffc6ff",
    "#fffffc",
  ],
  Cool: [
    "#0d3b66",
    "#faf0ca",
    "#f4d35e",
    "#ee6c4d",
    "#29335c",
    "#ffd460",
    "#c1121f",
    "#06d6a0",
    "#118ab2",
  ],
};
let selectedPalette = PALETTES["Earth Tones"];
function randomColor() {
  return selectedPalette[Math.floor(Math.random() * selectedPalette.length)];
}

// --- CONTROL PANEL ---------------------------------------------------------
const panel = document.createElement("div");
Object.assign(panel.style, {
  position: "fixed",
  top: "10px",
  right: "10px",
  maxWidth: "90%", // allow shrink on small screens
  background: "rgba(0,0,0,0.7)",
  color: "#fff",
  padding: "12px",
  borderRadius: "8px",
  fontFamily: "sans-serif",
  zIndex: 1000,
  fontSize: "12px",
  overflowWrap: "break-word",
});
document.body.append(panel);

function createSlider(labelText, min, max, step, defaultValue, onChange) {
  const container = document.createElement("div");
  container.style.marginBottom = "10px";
  const label = document.createElement("label");
  label.textContent = labelText;
  label.style.display = "block";
  label.style.marginBottom = "2px";
  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.step = step;
  input.value = defaultValue;
  input.style.width = "100%";
  input.addEventListener("input", () => onChange(parseFloat(input.value)));
  container.appendChild(label);
  container.appendChild(input);
  panel.appendChild(container);
}

function createCheckbox(labelText, defaultValue, onChange) {
  const container = document.createElement("div");
  container.style.marginBottom = "10px";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = defaultValue;
  input.addEventListener("change", () => onChange(input.checked));
  const label = document.createElement("label");
  label.textContent = labelText;
  label.style.marginLeft = "6px";
  container.appendChild(input);
  container.appendChild(label);
  panel.appendChild(container);
}

// --- CREATE CONTROLS -------------------------------------------------------
createSlider(
  "Wobble Intensity",
  0,
  100,
  1,
  wobbleIntensity,
  (val) => (wobbleIntensity = val)
);
createSlider(
  "Rotation Amount",
  0,
  0.2,
  0.001,
  rotationAmount,
  (val) => (rotationAmount = val)
);
createSlider(
  "Scale Amount",
  0,
  0.2,
  0.001,
  scaleAmount,
  (val) => (scaleAmount = val)
);
createSlider("Recursion Depth", 1, 20, 1, recursionDepth, (val) => {
  recursionDepth = val;
  generateTiles();
});
createSlider(
  "Animation Speed",
  0.1,
  5,
  0.01,
  animationSpeed,
  (val) => (animationSpeed = val)
);
createCheckbox("Show Stroke", showStroke, (val) => (showStroke = val));

// Palette selector
const paletteSelect = document.createElement("select");
for (let name in PALETTES) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  paletteSelect.appendChild(option);
}
paletteSelect.value = "Earth Tones";
paletteSelect.addEventListener("change", () => {
  selectedPalette = PALETTES[paletteSelect.value];
  generateTiles();
});
panel.appendChild(paletteSelect);

// Stop/Generate Buttons
const stopButton = document.createElement("button");
stopButton.textContent = "Pause Animation";
Object.assign(stopButton.style, {
  width: "100%",
  marginBottom: "6px",
  padding: "6px",
  cursor: "pointer",
});
panel.appendChild(stopButton);

const generateButton = document.createElement("button");
generateButton.textContent = "Generate Tiles";
Object.assign(generateButton.style, {
  width: "100%",
  marginBottom: "10px",
  padding: "6px",
  cursor: "pointer",
});
panel.appendChild(generateButton);

let isAnimating = true;
stopButton.addEventListener("click", () => {
  isAnimating = !isAnimating;
  stopButton.textContent = isAnimating ? "Pause Animation" : "Resume Animation";
});
generateButton.addEventListener("click", generateTiles);

const toggleContentButton = document.createElement("button");
toggleContentButton.textContent = "Hide Page Content";
Object.assign(toggleContentButton.style, {
  width: "100%",
  marginBottom: "10px",
  padding: "6px",
  cursor: "pointer",
});
panel.appendChild(toggleContentButton);

let contentHidden = false;
toggleContentButton.addEventListener("click", () => {
  contentHidden = !contentHidden;

  // Hide all body children except canvas and panel
  Array.from(document.body.children).forEach((el) => {
    if (el !== canvas && el !== panel) {
      el.style.display = contentHidden ? "none" : "";
    }
  });

  toggleContentButton.textContent = contentHidden
    ? "Show Page Content"
    : "Hide Page Content";
});
let cameraZoom = 1;

createSlider("Camera Zoom", 0.5, 2, 0.01, 1, (val) => (cameraZoom = val));

// --- RECURSIVE DIVIDE ------------------------------------------------------
let allTiles = [];
function divide(x, y, w, h, depth, direction) {
  if (w < 5 || h < 5) return;
  const split = Math.random() * 0.8 + 0.1;
  let tiles = [];
  if (direction === 0) {
    tiles.push({ x, y, w: w * split, h });
    tiles.push({ x: x + w * split, y, w: w - w * split, h });
    direction = 1;
  } else {
    tiles.push({ x, y, w, h: h * split });
    tiles.push({ x, y: y + h * split, w, h: h - h * split });
    direction = 0;
  }
  for (let t of tiles) {
    if (depth < recursionDepth && Math.random() < 0.9) {
      divide(t.x, t.y, t.w, t.h, depth + 1, direction);
    } else {
      allTiles.push(new Tile(t.x, t.y, t.w, t.h, randomColor()));
    }
  }
}

// --- RENDER TILES ONCE (NEW) ------------------------------------------------
function renderTilesOnce() {
  staticCanvas.width = canvas.width;
  staticCanvas.height = canvas.height;

  staticCtx.setTransform(1, 0, 0, 1, 0, 0);
  staticCtx.clearRect(0, 0, staticCanvas.width, staticCanvas.height);

  for (let tile of allTiles) {
    staticCtx.fillStyle = tile.color;
    staticCtx.fillRect(tile.x, tile.y, tile.w, tile.h);

    if (showStroke) {
      staticCtx.strokeStyle = "white";
      staticCtx.lineWidth = 2;
      staticCtx.strokeRect(tile.x + 0.5, tile.y + 0.5, tile.w, tile.h);
    }
  }
}

// --- RESIZE CANVAS ---------------------------------------------------------
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateTiles();
}
window.addEventListener("resize", resizeCanvas);

// --- GENERATE TILES FUNCTION ------------------------------------------------
function generateTiles() {
  allTiles = [];
  const margin = 200;
  divide(
    -margin,
    -margin,
    window.innerWidth + margin * 2,
    window.innerHeight + margin * 2,
    0,
    0
  );

  renderTilesOnce(); // ← NEW
}

// --- ANIMATION LOOP --------------------------------------------------------
function animate() {
  if (isAnimating) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const t = Date.now() * 0.0003 * animationSpeed;
    const driftX = Math.sin(t) * wobbleIntensity;
    const driftY = Math.cos(t * 0.7) * wobbleIntensity;
    const rotation = Math.sin(t * 0.5) * rotationAmount;
    const scale = 1 + Math.sin(t * 0.8) * scaleAmount;

    ctx.save();
    ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
    ctx.scale(scale * cameraZoom, scale * cameraZoom);
    ctx.rotate(rotation);
    ctx.translate(
      -window.innerWidth / 2 + driftX,
      -window.innerHeight / 2 + driftY
    );

    ctx.drawImage(staticCanvas, 0, 0);

    ctx.restore();
  }
  requestAnimationFrame(animate);
}

// --- START -----------------------------------------------------------------
resizeCanvas();
animate();
