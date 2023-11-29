import { ImageResponse } from "@vercel/og";
export const runtime = "edge";

const bgColor = "#F0F8FF";
const titleFontSize = "80px";
const titleTextTransform = "capitalize";
const titleLineHeight = "1em";
const titleLetterSpacing = "normal";
const subtitleTextColor = "#505050";
const subtitleFontSize = "30px";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const font1 = await fetch(
      new URL("/public/Inter-Bold.ttf", import.meta.url)
    );

    if (!font1.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData1 = await font1.arrayBuffer();

    const font2 = await fetch(
      new URL("/public/NotoSans-Regular.ttf", import.meta.url)
    );

    if (!font2.ok) {
      throw new Error("Failed to fetch the font file");
    }

    const fontData2 = await font2.arrayBuffer();

    // dynamic params| ?title=your%20title | %20 = space in url, %0D next line
    // Example: ?title=number%20one%20remote%0Djob%20app
    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "My default title";
    // Example: &subtitle=https://www.xiohoo.com
    const subtitle = searchParams.has("subtitle")
      ? searchParams.get("subtitle")
      : "My default subtitle";

    return new ImageResponse(
      (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: bgColor,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
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
                fontFamily: "Regular",
              }}
            >
              {title}
            </div>
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: subtitleFontSize,
                color: subtitleTextColor,
                marginTop: "32px",
                fontFamily: '"Inter"',
              }}
            >
              {subtitle}
            </div>
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
            name: "Inter",
            data: fontData1,
            style: "normal",
          },
          {
            name: "Regular",
            data: fontData2,
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
