import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const fontResponse = await fetch(
      new URL("/public/italic.ttf", import.meta.url)
    );

    if (!fontResponse.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData = await fontResponse.arrayBuffer();

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              fontSize: "80px",
              color: "white",
              boxShadow: "10px 8px 10px 5px pink",
              fontFamily: "Italic",
              backgroundImage: "linear-gradient(to right, #eeaeca, #94bbe9)",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
        emoji: "twemoji",
        fonts: [
          {
            name: "Italic",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
