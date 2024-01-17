import React from "react";
import Link from "next/link";

const page = async () => {
  return (
    <>
      <ul className="list-decimal list-inside ml-4 mt-4">
        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/1center-with-title">Center title</Link>
            </li>

            <li>
              <Link href="/api/ogdesign/1center-with-title?title=number%20one%20remote%0Djob%20app">
                Center title with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/2center-with-title-subtitle-external-font">
                Center title and subtitle with external font type
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/2center-with-title-subtitle-external-font?title=number%20one%20remote%0Djob%20app&subtitle=https://www.interviewtogether.com/">
                Center title and subtitle with external font type with
                parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/3center-title-gradientbg">
                Gradient with gradient bg
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/3center-title-gradientbg?title=number%20one%20remote%0Djob%20app">
                Center title with gradient bg with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/4center-title-imgbg-url">
                Center title with background image-url
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/4center-title-imgbg-url?title=number%20one%20remote%0Djob%20app&image=https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                Center title with background image-url with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/5center-title-logo-url">
                Center title with logo-url
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/5center-title-logo-url?title=number%20one%20crypto%0Dexchange%202023&logo=https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDA2Mjk2Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080">
                Center title with logo-url with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/6center-emojis">Center emoji</Link>
            </li>
            <li>
              <Link href="/api/ogdesign/6center-emojis?title=🙄%20🥵%20🤯%20🧑%20">
                Center emoji with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/7left-title-right-personimg">
                Left title and right personimg
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/7left-title-right-personimg?title=best%20speaker%20of%202023%20in%20asia">
                Left title and right personimg with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/8left-url-title-price-right-brand-img-url">
                Left title,button & price with right image-url
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/8left-url-title-price-right-brand-img-url?title=Festive%20Cat%20-%20Cyclone%20Chee%20Japanese%20Handmade%20Cycling%20Cap&website=https://takachya.cc/&image=https://takachya.cc/cdn/shop/products/CycloneCheeCyclingFestiveCat_002_823x.jpg?v=1664428401&price=$59.00%20SGD">
                Left title,button & price with right image-url with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/9slanted-title">Slanted Title</Link>
            </li>
            <li>
              <Link href="/api/ogdesign/9slanted-title?title=API%20CRUD">
                Slanted Title with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <ul className="list-disc list-inside ml-4">
            <li>
              <Link href="/api/ogdesign/10twocolorsbg-title">
                Slanted background with title
              </Link>
            </li>
            <li>
              <Link href="/api/ogdesign/10twocolorsbg-title?text=Website%20Name">
                Slanted background with title with parameters{" "}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default page;
