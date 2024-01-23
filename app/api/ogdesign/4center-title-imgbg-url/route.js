import { ImageResponse } from "@vercel/og";
import Image from "next/image";
export const runtime = "edge";


const titleFontSize = "80px";
const titleTextTransform = "capitalize";
const titleLineHeight = "1em";
const titleLetterSpacing = "normal";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    // dynamic params| ?title=your%20title | %20 = space in url, %0D next line
    // Example: ?title=interview%20together
    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "My default title";

      const image = searchParams.has("image")
      ? searchParams.get("image")
      : await fetch(new URL("/public/design4-bg.jpg", import.meta.url)).then(
          (res) => res.arrayBuffer()
        );

    return new ImageResponse(
      (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: "black",
          }}
        >
          {/* <img
            style={{
              objectFit: "cover",
              position: "absolute",
              // inset: "0px",
              width: "100%",
              height: "100%",
              opacity: "0.8",
            }}
            src={image}
          /> */}
          <Image  style={{
              objectFit: "cover",
              position: "absolute",
              // inset: "0px",
              width: "100%",
              height: "100%",
              opacity: "0.8",
            }}
            src={image} />

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: titleFontSize,
              textTransform: titleTextTransform,
              lineHeight: titleLineHeight,
              letterSpacing: titleLetterSpacing,
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
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
