import React from "react";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
const titleLineHeight = "1em";
const titleFontSize = "80px";
const titleTextTransform = "capitalize";
const titleLetterSpacing = "normal";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title for this design page";

    const image = await fetch(
      new URL("/public/person-with-speaker.jpg", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundcolor: "#ffffff",
            backgroundImage: "linear-gradient(to bottom, #b6e7fc, #fff1f1)",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: titleFontSize,
                letterSpacing: titleLetterSpacing,
                textAlign: "left",
                textTransform: titleTextTransform,
                lineHeight: titleLineHeight,
                width: "50%",
              }}
            >
              {title}
            </div>
            {/* </div> */}
            {image ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    borderWidth: "4px",
                    borderColor: "black",
                  }}
                  src={image}
                />
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
