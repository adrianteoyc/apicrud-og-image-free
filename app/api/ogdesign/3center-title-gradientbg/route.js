import { ImageResponse } from "@vercel/og";


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

    return new ImageResponse(
      (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundImage: "linear-gradient(to bottom, #b6e7fc, #fff1f1)",
          }}
        >
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
