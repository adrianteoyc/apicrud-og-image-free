import React from "react";
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

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "My default title";

    // default from local
    const logoFromURL = searchParams.has("logo")
      ? searchParams.get("logo")
      : await fetch(
          new URL("/public/interview-together-logo-200x.png", import.meta.url)
        ).then((res) => res.arrayBuffer());
    // console.log("logoFromURL", logoFromURL);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignContent: "space-between",
            justifyContent: "center",
            alignItems: "center",
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
                fontSize: titleFontSize,
                textTransform: titleTextTransform,
                lineHeight: titleLineHeight,
                letterSpacing: titleLetterSpacing,
                color: "black",
                fontFamily: "Italic",
              }}
            >
              {title}
            </div>
            <img
              src={logoFromURL}
              style={{
                objectFit: "cover",

                width: "200px",
                height: "200px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginTop: "20px",
                borderRadius: "90%",
                borderWidth: "2px",
                borderColor: "black",
              }}
            />
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
