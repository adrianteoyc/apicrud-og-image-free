import { ImageResponse } from "@vercel/og";
export const runtime = "edge";

const bgColor = "#F0F8FF";
const titleFontSize = "80px";
const titleTextTransform = "capitalize";
const titleLineHeight = "1em";
const titleLetterSpacing = "normal";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params| ?title=your%20title | %20 = space in url, %0D next line
    // Example: ?title=number%20one%20remote%0Djob%20app
    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: bgColor,
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
              width: "100%",
              fontSize: titleFontSize,
              textTransform: titleTextTransform,
              lineHeight: titleLineHeight,
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
        // Default to 'twemoji
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
