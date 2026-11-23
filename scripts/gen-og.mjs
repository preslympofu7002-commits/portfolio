// Generate the editorial social card. Supply a sharp module path as the first
// argument when it is not installed locally: node scripts/gen-og.mjs <path>
import fs from "node:fs/promises";
const paths = Array.from({ length: 64 }, (_, i) => {
  const u = (i / 64) * Math.PI * 2;
  const d =
    Array.from({ length: 90 }, (_, j) => {
      const v = (j / 89) * Math.PI * 2;
      const x = (132 + 57 * Math.cos(v)) * Math.cos(u);
      const y =
        (132 + 57 * Math.cos(v)) * Math.sin(u) * 0.48 + 57 * Math.sin(v) * 0.88;
      return `${j ? "L" : "M"}${(230 + x * Math.cos(-0.46) - y * Math.sin(-0.46)).toFixed(2)},${(235 + x * Math.sin(-0.46) + y * Math.cos(-0.46)).toFixed(2)}`;
    }).join(" ") + "Z";
  return `<path d="${d}"/>`;
}).join("");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f5f3ec"/>
<path d="M55 92H1145M55 565H1145" stroke="#cecec4"/>
<g fill="#20221f" font-family="Arial, sans-serif"><text x="55" y="64" font-size="20">PRESLY MPOFU</text><text x="1145" y="64" font-size="14" text-anchor="end" letter-spacing="2">ZIMBABWE / INDIA</text><text x="55" y="154" font-size="14" letter-spacing="2">STUDENT · DEVELOPER · FOUNDER</text><text x="49" y="281" font-size="113" font-weight="700" letter-spacing="-7">PRESLY</text><text x="49" y="388" font-size="113" font-weight="700" letter-spacing="-7">MPOFU<tspan fill="#d95136">.</tspan></text><text x="55" y="457" font-size="27">A curious mind.</text><text x="55" y="500" font-family="Georgia, serif" font-size="31" font-style="italic" fill="#2449d8">A purposeful builder.</text><text x="55" y="603" font-size="14">COMPUTER SCIENCE / ARTIFICIAL INTELLIGENCE / MACHINE LEARNING</text></g>
<g transform="translate(662 92)"><path d="M0 235H460M230 0V460" stroke="#cecec4" stroke-width=".5"/><circle cx="230" cy="235" r="200" stroke="#cecec4" stroke-width=".5" fill="none" stroke-dasharray="3 6"/><circle cx="368" cy="345" r="48" fill="#d95136"/><g fill="none" stroke="#2449d8" stroke-width="1.15">${paths}</g></g></svg>`;
await fs.writeFile("public/og-image.svg", svg);
try {
  const { default: sharp } = await import(
    process.argv[2]
      ? new URL(`file:///${process.argv[2].replaceAll("\\", "/")}`).href
      : "sharp"
  );
  await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
  console.log("Generated social card: SVG and 1200 × 630 PNG.");
} catch (error) {
  console.error(
    "SVG generated. PNG requires sharp: pass its module path as the first argument.",
  );
  process.exitCode = 1;
}
