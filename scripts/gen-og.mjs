// Generates public/og-image.png (1200x630) — branded social preview card.
// Pure Node: zlib-compressed PNG, no dependencies.
import zlib from 'node:zlib';
import fs from 'node:fs';

const W = 1200, H = 630;
const px = new Uint8Array(W * H * 3);

const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const lerp = (a, b, t) => a + (b - a) * t;
const mix = (c1, c2, t) => [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];

const C_TOP = hex('#020818');
const C_BOT = hex('#0a1f3d');
const CYAN = hex('#22d3ee');
const VIOLET = hex('#a78bfa');
const BLUE = hex('#60a5fa');

function setPixel(x, y, r, g, b, a = 1) {
  x |= 0; y |= 0;
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 3;
  px[i] = lerp(px[i], r, a);
  px[i + 1] = lerp(px[i + 1], g, a);
  px[i + 2] = lerp(px[i + 2], b, a);
}

function fillRect(x, y, w, h, color, a = 1) {
  for (let yy = y; yy < y + h; yy++)
    for (let xx = x; xx < x + w; xx++) setPixel(xx, yy, color[0], color[1], color[2], a);
}

// Background: diagonal gradient
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const t = (x / W * 0.35 + y / H * 0.65);
    const c = mix(C_TOP, C_BOT, t);
    const i = (y * W + x) * 3;
    px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2];
  }
}

// Radial glows
function glow(cx, cy, radius, color, strength) {
  for (let y = Math.max(0, cy - radius); y < Math.min(H, cy + radius); y++) {
    for (let x = Math.max(0, cx - radius); x < Math.min(W, cx + radius); x++) {
      const d = Math.hypot(x - cx, y - cy) / radius;
      if (d < 1) {
        const a = Math.pow(1 - d, 2.2) * strength;
        setPixel(x, y, color[0], color[1], color[2], a);
      }
    }
  }
}
glow(240, 160, 520, CYAN, 0.16);
glow(1010, 120, 460, VIOLET, 0.14);
glow(1080, 560, 420, BLUE, 0.08);

// Grid
for (let x = 60; x < W; x += 60) for (let y = 0; y < H; y++) setPixel(x, y, 34, 211, 238, 0.028);
for (let y = 60; y < H; y += 60) for (let x = 0; x < W; x++) setPixel(x, y, 34, 211, 238, 0.028);

// Frame
const F = 36;
for (let x = F; x < W - F; x++) { setPixel(x, F, 255, 255, 255, 0.08); setPixel(x, H - F, 255, 255, 255, 0.08); }
for (let y = F; y < H - F; y++) { setPixel(F, y, 255, 255, 255, 0.08); setPixel(W - F, y, 255, 255, 255, 0.08); }

// ---- 5x7 bitmap font (only glyphs needed) ----
const FONT = {
  A: [0x0e,0x11,0x11,0x1f,0x11,0x11,0x11],
  D: [0x1e,0x11,0x11,0x11,0x11,0x11,0x1e],
  E: [0x1f,0x10,0x10,0x1e,0x10,0x10,0x1f],
  F: [0x1f,0x10,0x10,0x1e,0x10,0x10,0x10],
  I: [0x1f,0x04,0x04,0x04,0x04,0x04,0x1f],
  L: [0x10,0x10,0x10,0x10,0x10,0x10,0x1f],
  M: [0x11,0x1b,0x15,0x15,0x11,0x11,0x11],
  N: [0x11,0x19,0x15,0x13,0x11,0x11,0x11],
  O: [0x0e,0x11,0x11,0x11,0x11,0x11,0x0e],
  P: [0x1e,0x11,0x11,0x1e,0x10,0x10,0x10],
  R: [0x1e,0x11,0x11,0x1e,0x14,0x12,0x11],
  S: [0x0f,0x10,0x10,0x0e,0x01,0x01,0x1e],
  U: [0x11,0x11,0x11,0x11,0x11,0x11,0x0e],
  V: [0x11,0x11,0x11,0x11,0x11,0x0a,0x04],
  Y: [0x11,0x11,0x0a,0x04,0x04,0x04,0x04],
  '/': [0x01,0x02,0x02,0x04,0x08,0x08,0x10],
  ' ': [0,0,0,0,0,0,0],
};

function drawChar(ch, x, y, scale, colorFn) {
  const glyph = FONT[ch] || FONT[' '];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 5; col++) {
      if (glyph[row] & (1 << (4 - col))) {
        const c = colorFn(col * scale, row * scale);
        fillRect(x + col * scale, y + row * scale, scale, scale, c);
      }
    }
  }
}

function drawText(text, x, y, scale, color) {
  const charW = 6 * scale;
  let cx = x;
  for (const ch of text) {
    drawChar(ch.toUpperCase(), cx, y, scale, () => color);
    cx += charW;
  }
  return cx;
}

// Gradient text: lerps c1→c2 across the whole string width
function drawTextGradient(text, x, y, scale, c1, c2) {
  const totalW = text.length * 6 * scale;
  let cx = x;
  for (const ch of text.toUpperCase()) {
    const glyph = FONT[ch] || FONT[' '];
    const charX0 = cx - x;
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (glyph[row] & (1 << (4 - col))) {
          for (let sx = 0; sx < scale; sx++) {
            for (let sy = 0; sy < scale; sy++) {
              const gx = charX0 + col * scale + sx;
              const t = totalW > 1 ? gx / (totalW - 1) : 0;
              const c = mix(c1, c2, t);
              setPixel(cx + col * scale + sx, y + row * scale + sy, c[0], c[1], c[2], 1);
            }
          }
        }
      }
    }
    cx += 6 * scale;
  }
}

// ---- Layout ----
// Title block (left)
const TX = 96;
// Accent bar
fillRect(TX, 238, 64, 5, CYAN);
// Small caps line
drawText('COMPUTER SCIENCE / AI / ML', TX, 262, 2, [140, 170, 200]);
// Name line 1
drawText('PRESLY', TX, 300, 9, [245, 248, 255]);
// Name line 2 with cyan→violet gradient
drawTextGradient('MPOFU', TX, 372, 9, CYAN, VIOLET);
drawText('AI/ML DEVELOPER', TX, 486, 4, [150, 175, 205]);
drawText('AFRIM TECHNOLOGIES / KPRIET INDIA', TX, 528, 3, [110, 135, 165]);

// Emblem (right): orbit rings + core
const EX = 1010, EY = 315;
function ring(cx, cy, r, color, thickness, alpha) {
  for (let a = 0; a < Math.PI * 2; a += 0.002) {
    for (let t = -thickness / 2; t <= thickness / 2; t++) {
      const rr = r + t;
      setPixel(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.92, color[0], color[1], color[2], alpha);
    }
  }
}
ring(EX, EY, 120, CYAN, 2.5, 0.5);
ring(EX, EY, 88, VIOLET, 2, 0.45);
ring(EX, EY, 56, BLUE, 2, 0.4);
// orbiting dots
for (let i = 0; i < 3; i++) {
  const a = i * (Math.PI * 2 / 3) + 0.5;
  setPixel(EX + Math.cos(a) * 120, EY + Math.sin(a) * 120 * 0.92, 34, 211, 238, 0.9);
  setPixel(EX + Math.cos(a) * 88, EY + Math.sin(a) * 88 * 0.92, 167, 139, 250, 0.9);
}
// core
glow(EX, EY, 60, CYAN, 0.35);
fillRect(EX - 4, EY - 4, 8, 8, CYAN);
fillRect(EX - 10, EY - 1, 20, 2, [255, 255, 255]);
fillRect(EX - 1, EY - 10, 2, 20, [255, 255, 255]);

// ---- PNG encode ----
const raw = Buffer.alloc(H * (1 + W * 3));
for (let y = 0; y < H; y++) {
  raw[y * (1 + W * 3)] = 0;
  Buffer.from(px.buffer, y * W * 3, W * 3).copy(raw, y * (1 + W * 3) + 1);
}
const idat = zlib.deflateSync(raw, { level: 9 });

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = buf => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', idat),
  chunk('IEND', Buffer.alloc(0)),
]);

fs.writeFileSync('public/og-image.png', png);
console.log('wrote public/og-image.png', png.length, 'bytes');
