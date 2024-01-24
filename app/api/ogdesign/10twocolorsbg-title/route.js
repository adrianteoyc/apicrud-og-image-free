import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const bgColorBottom = "#000000";
const bgColorTop = "#002540";
const titleLineHeight = "1em";
const titleFontSize = "100px";
const titleTextTransform = "capitalize";
const titleLetterSpacing = "normal";
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const fontResponse = await fetch(
      new URL("/public/vercel-og-assets/font/italic.ttf", import.meta.url)
    );

    if (!fontResponse.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData = await fontResponse.arrayBuffer();

    // dynamic params
    const text = searchParams.has("text")
      ? searchParams.get("text")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // change the top part of the background color at here
            background: bgColorTop,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "140%",
              display: "flex",
              // change the bottom part of the background color at here
              background: bgColorBottom,
              paddingLeft: "10px",
              bottom: "-150px",
              marginTop: "400px",
              marginRight: "10px",
              transform: "rotate(27.7deg)",
            }}
          ></div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
              letterSpacing: titleLetterSpacing,
              textTransform: titleTextTransform,
              fontFamily: "Italic",
              // Change the font color here the below is example using linear gradient , if dont want to use it can just simply put color:"The color you want"
              backgroundImage: "linear-gradient(to right, #ffffff, #FFFFFF)",
              backgroundClip: "text",
              "-webkit-background-clip": "text",
              color: "transparent",
              position: "absolute",
            }}
          >
            {text}
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
