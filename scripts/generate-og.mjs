/**
 * Generates public/og.png (1200x630 Open Graph card).
 *
 * A static .png is served by Vercel with a proper image/png content-type;
 * the app-route version (app/opengraph-image.tsx) exported an extensionless
 * file that Vercel served as application/octet-stream, which OG scrapers
 * reject. Re-run after changing the name/tagline: npm run generate:og
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og.js";

const root = process.cwd();

const forest = "#1a3a2a";
const cream = "#f5f0e8";
const gold = "#c9a96e";
const slate = "#4a7a9b";

const name = "Patrick Munnelly";
const tagline =
  "Full Stack Engineer  ·  React, Node.js, Python  ·  Multi-Sector Builder Shipping Fast";
const subline = "Marbella, Spain · Remote across EU · Available now";

function div(style, children) {
  return { type: "div", props: { style, children } };
}

const [jakarta, inter] = await Promise.all([
  readFile(path.join(root, "assets/fonts/plus-jakarta-sans-700.ttf")),
  readFile(path.join(root, "assets/fonts/inter-400.ttf")),
]);

const card = div(
  {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cream,
    color: forest,
    padding: "0 90px",
    textAlign: "center",
  },
  [
    div(
      {
        fontFamily: "Plus Jakarta Sans",
        fontSize: 92,
        fontWeight: 700,
        letterSpacing: -1,
      },
      name,
    ),
    div({
      width: 140,
      height: 3,
      backgroundColor: gold,
      marginTop: 36,
      marginBottom: 36,
    }),
    div({ fontFamily: "Inter", fontSize: 30, fontWeight: 400 }, tagline),
    div(
      {
        fontFamily: "Inter",
        fontSize: 24,
        fontWeight: 400,
        marginTop: 28,
        color: slate,
      },
      subline,
    ),
  ],
);

const image = new ImageResponse(card, {
  width: 1200,
  height: 630,
  fonts: [
    { name: "Plus Jakarta Sans", data: jakarta, weight: 700, style: "normal" },
    { name: "Inter", data: inter, weight: 400, style: "normal" },
  ],
});

const buffer = Buffer.from(await image.arrayBuffer());
await writeFile(path.join(root, "public/og.png"), buffer);
console.log(`public/og.png written (${Math.round(buffer.length / 1024)} KB)`);
