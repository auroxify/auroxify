import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "Software House in Karachi").slice(0, 80);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#06080f 0%,#0b1630 55%,#1d1450 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 700 }}>
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: 11, background: "#4a9eff" }} />
          Auroxify
        </div>
        <div style={{ display: "flex", fontSize: title.length > 45 ? 62 : 78, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9fb4d8" }}>
          Websites · E-commerce · AI · SEO | auroxify.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}