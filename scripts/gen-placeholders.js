const fs = require("fs");
const path = require("path");

// Wood-tone palettes per brand — each an array of [base, grain, accent]
const palettes = {
  "home-hero": ["#3E2723", "#5D4037", "#8D6E63"],
  "home-swatches": ["#A9784A", "#8D5A2B", "#C9A36A"],
  "home-projects": ["#6D4C2F", "#5A3E24", "#9C7A4E"],
  spc: ["#9C7A4E", "#B8863B", "#7A5A34"],
  egger: ["#5A3E24", "#7A5636", "#3E2814"],
  agt: ["#8D6E63", "#A9846F", "#6B4F3F"],
  floorpan: ["#B8863B", "#D9A85C", "#8F6A2E"],
  camsan: ["#6B4226", "#8A5A34", "#4A2E18"],
  guide: ["#4E342E", "#6D4C41", "#8D6E63"],
};

const dims = { "home-hero": [1600, 900], "home-projects": null };

function plankSVG({ w, h, base, grain, accent, label, seed }) {
  const planks = 6;
  const plankH = h / planks;
  let plankRects = "";
  for (let i = 0; i < planks; i++) {
    const shade = i % 2 === 0 ? base : grain;
    plankRects += `<rect x="0" y="${i * plankH}" width="${w}" height="${plankH}" fill="${shade}" opacity="0.9"/>
    <line x1="0" y1="${i * plankH}" x2="${w}" y2="${i * plankH}" stroke="${accent}" stroke-opacity="0.25" stroke-width="2"/>`;
  }
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="grain-${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="3" seed="${seed}" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.06  0 0 0 0 0.02  0 0 0 0.35 0"/>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
    <linearGradient id="sheen-${seed}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${base}"/>
  <g filter="url(#grain-${seed})">${plankRects}</g>
  <rect width="${w}" height="${h}" fill="url(#sheen-${seed})"/>
  <text x="24" y="${h - 24}" font-family="sans-serif" font-size="${Math.max(14, w * 0.018)}" fill="#F3EDE4" fill-opacity="0.85">${label}</text>
</svg>`;
}

let seedCounter = 1;
function write(dir, name, w, h, base, grain, accent, label) {
  const svg = plankSVG({ w, h, base, grain, accent, label, seed: seedCounter++ });
  const outDir = path.join(__dirname, "..", "public", "images", dir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `${name}.svg`), svg);
}

// Home hero — one wide banner
write("home-hero", "hero-01", 1600, 900, ...palettes["home-hero"], "عينة مؤقتة — استبدلها بصورة المعرض");

// Home swatches — 8 square-ish product swatches
for (let i = 1; i <= 8; i++) {
  const [b, g, a] = palettes["home-swatches"];
  write("home-swatches", `swatch-${String(i).padStart(2, "0")}`, 640, 640, b, g, a, `عينة أرضية ${i}`);
}

// Home projects — masonry, varied aspect ratios
const projDims = [[800, 1000], [900, 700], [800, 800], [900, 1200], [1000, 700], [800, 950]];
projDims.forEach(([w, h], i) => {
  const [b, g, a] = palettes["home-projects"];
  write("home-projects", `project-${String(i + 1).padStart(2, "0")}`, w, h, b, g, a, `تركيب لدى عميل ${i + 1}`);
});

// Brand pages — 6 swatches each
["spc", "egger", "agt", "floorpan", "camsan"].forEach((brand) => {
  const [b, g, a] = palettes[brand];
  for (let i = 1; i <= 6; i++) {
    write(brand, `${brand}-${String(i).padStart(2, "0")}`, 640, 640, b, g, a, `${brand.toUpperCase()} - لون ${i}`);
  }
});

// Guide article images
const [gb, gg, ga] = palettes.guide;
write("guide", "guide-01", 1000, 650, gb, gg, ga, "مميزات أرضيات HDF");
write("guide", "guide-02", 1000, 650, gg, gb, ga, "عيوب أرضيات HDF");

console.log("Placeholder SVGs generated.");
