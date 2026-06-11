import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const jakarta = await readFile(
    path.join(process.cwd(), "assets/fonts/plus-jakarta-sans-700.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a3a2a",
          color: "#f5f0e8",
          fontFamily: "Plus Jakarta Sans",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 0.5,
        }}
      >
        PM
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: jakarta,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
