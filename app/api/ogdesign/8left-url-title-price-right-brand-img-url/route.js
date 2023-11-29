import React from "react";
import { ImageResponse } from "@vercel/og";

const bgColor = "white";
const titleLineHeight = "1em";
const titleFontSize = "48px";
const titleTextTransform = "capitalize";
const titleLetterSpacing = "normal";
const subtitleTextColor = "#505050";
const subtitleFontSize = "30px";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Cycling Cat - Cyclone Chee Japanese Handmade Cycling Cap";
    const website = searchParams.get("website") || " https://takachya.cc/";
    const price = searchParams.get("price") || "$59.00";
    const image =
      searchParams.get("image") ||
      "https://takachya.cc/cdn/shop/products/CycloneCheeCyclingCapCyclingCat_002_823x.jpg?v=1664428129";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: bgColor,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "40%",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              paddingLeft: "80px",
              paddingTop: "48px",
              paddingBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "0px",
                color: "#48BB78",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              {website}
            </p>
            <h1
              style={{
                lineHeight: titleLineHeight,
                fontSize: titleFontSize,
                fontweight: "900",
                textAlign: "left",
                letterSpacing: titleLetterSpacing,
                textTransform: titleTextTransform,
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "30px",
                fontweight: "bold",
                backgroundColor: "black",
                color: "#f0fff4",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                borderRadius: "8px",
                marginRight: "auto",
              }}
            >
              {price}
            </p>
          </div>
          {image ? (
            <div
              style={{
                display: "flex",
                width: "60%",
                height: "100%",
              }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={image}
              />
            </div>
          ) : null}
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
