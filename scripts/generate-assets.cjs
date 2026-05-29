/* eslint-disable */
// One-shot asset pipeline:
//   1. Optimise Saint Petersburg photos → src/assets/saint-petersburg/web/*.webp
//   2. Generate favicons (32, 16, 180) from permira-logo-small.png → public/
//   3. Render a 1200x630 OG share card → public/og.jpg
// Re-run after dropping new photos in.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const spbSrc = path.join(root, "src/assets/saint-petersburg");
const spbOut = path.join(spbSrc, "web");
const pub = path.join(root, "public");
const logo = path.join(root, "src/assets/permira-logo-small.png");
fs.mkdirSync(spbOut, { recursive: true });

const num = (s) => {
  const m = s.match(/\((\d+)\)/);
  return m ? parseInt(m[1], 10) : 0;
};

(async () => {
  // ── 1. SPb photos ────────────────────────────────────────────
  const photos = fs
    .readdirSync(spbSrc)
    .filter((f) => /\.(jpe?g)$/i.test(f))
    .sort();
  let i = 1;
  for (const f of photos) {
    const dst = path.join(spbOut, String(i).padStart(2, "0") + ".webp");
    await sharp(path.join(spbSrc, f))
      .rotate()
      .resize({ width: 2000, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(dst);
    const kb = (fs.statSync(dst).size / 1024).toFixed(0);
    console.log("spb", String(i).padStart(2, "0"), kb + "KB");
    i++;
  }

  // ── 2. favicons ──────────────────────────────────────────────
  for (const size of [16, 32, 180]) {
    const out = path.join(
      pub,
      size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`,
    );
    await sharp(logo).resize(size, size, { fit: "cover" }).png().toFile(out);
    console.log("favicon", size, "→", path.basename(out));
  }
  // 32 doubles as the default favicon
  fs.copyFileSync(
    path.join(pub, "favicon-32.png"),
    path.join(pub, "favicon.png"),
  );

  // ── 3. OG share card (1200×630) ──────────────────────────────
  const bgPhoto = path.join(spbOut, "01.webp");
  const W = 1200,
    H = 630;
  const bg = await sharp(bgPhoto)
    .resize(W, H, { fit: "cover", position: "centre" })
    .modulate({ brightness: 0.55, saturation: 0.7 })
    .toBuffer();
  const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="rgba(10,8,9,0.15)"/>
      <stop offset="1" stop-color="rgba(10,8,9,0.85)"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="80" y="120" fill="#b0908f" font-family="JetBrains Mono, monospace" font-size="22" letter-spacing="6">PERMIRA · SAINT PETERSBURG</text>
  <text x="80" y="360" fill="#efe1dc" font-family="Bodoni Moda, serif" font-style="italic" font-size="180" letter-spacing="-6">ПЕРМИРА</text>
  <text x="82" y="445" fill="#a72716" font-family="Instrument Serif, serif" font-style="italic" font-size="56">— Indonesian students,</text>
  <text x="82" y="510" fill="#efe1dc" font-family="Instrument Serif, serif" font-style="italic" font-size="56">on the gulf of Finland.</text>
  <text x="80" y="580" fill="#b0908f" font-family="JetBrains Mono, monospace" font-size="20" letter-spacing="4">59.9311° N · 30.3609° E   ·   permiraspb.org</text>
</svg>`);
  await sharp(bg)
    .composite([{ input: overlay }])
    .jpeg({ quality: 86 })
    .toFile(path.join(pub, "og.jpg"));
  console.log(
    "og.jpg",
    (fs.statSync(path.join(pub, "og.jpg")).size / 1024).toFixed(0) + "KB",
  );

  console.log("done");
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
