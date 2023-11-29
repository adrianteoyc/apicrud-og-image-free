import React from "react";
import { ImageResponse } from "@vercel/og";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    // https://twemoji-cheatsheet.vercel.app/
    // ?title=🚀😀🌕
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "💰️🤑🫰🧧🪙";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundcolor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: "80px",
            }}
          >
            {title}
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
