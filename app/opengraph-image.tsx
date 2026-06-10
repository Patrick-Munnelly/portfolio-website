import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [playfair, crimson] = await Promise.all([
    readFile(
      path.join(process.cwd(), "assets/fonts/playfair-display-700.ttf"),
    ),
    readFile(path.join(process.cwd(), "assets/fonts/crimson-text-600.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f0e8",
          color: "#1a3a2a",
          padding: "0 90px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            width: 140,
            height: 3,
            backgroundColor: "#c9a96e",
            marginTop: 36,
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontFamily: "Crimson Text",
            fontSize: 31,
            fontWeight: 600,
          }}
        >
          {site.taglineParts.join("  ·  ")}
        </div>
        <div
          style={{
            fontFamily: "Crimson Text",
            fontSize: 26,
            fontWeight: 600,
            marginTop: 28,
            color: "#4a7a9b",
          }}
        >
          {site.subline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair,
          weight: 700,
          style: "normal",
        },
        {
          name: "Crimson Text",
          data: crimson,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
