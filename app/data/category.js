let siteURL = "http://localhost:3000";
const env = process.env.NODE_ENV;
if (env == "production") {
  siteURL = "https://apicrud-og-image-free.vercel.app";
}

export const categoryList = [
  {
    title: "Category",
    ogImage: [
      {
        id: 1,
        name: "Center title",
        categories: ["Simple", "Center", "Free"],
        image: siteURL + "/api/ogdesign/1center-with-title",
        path: siteURL + "/api/ogdesign/1center-with-title?title=APICrud",
      },
      {
        id: 2,
        name: " Center title and subtitle with external font type",
        categories: ["Simple", "Center", "Free"],
        image:
          siteURL + "/api/ogdesign/2center-with-title-subtitle-external-font",
        path:
          siteURL +
          "/api/ogdesign/2center-with-title-subtitle-external-font?title=APICrud&subtitle=APICrud",
      },
      {
        id: 3,
        name: " Center title with gradient bg",
        categories: ["Simple", "Center", "Gradient", "Free"],
        image: siteURL + "/api/ogdesign/3center-title-gradientbg",
        path: siteURL + "/api/ogdesign/3center-title-gradientbg?title=APICrud",
      },
      {
        id: 4,
        name: "Center title with background image-url",
        categories: ["Center", "Background-Image", "Free"],
        image: siteURL + "/api/ogdesign/4center-title-imgbg-url",
        path: siteURL + "/api/ogdesign/4center-title-imgbg-url?title=APICrud",
      },
      {
        id: 5,
        name: "Center title with logo-url",
        categories: ["Center", "Image", "Logo", "Free"],
        image: siteURL + "/api/ogdesign/5center-title-logo-url",
        path:
          siteURL +
          "/api/ogdesign/5center-title-logo-url?title=APICrud&logo=" +
          siteURL +
          "/vercel-og-assets/image/5logo1.jpeg",
        //source:
        // https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        name: "Center emoji",
        categories: ["Emoji", "Center", "Free"],
        image: siteURL + "/api/ogdesign/6center-emojis",
        path: siteURL + "/api/ogdesign/6center-emojis?title=🍿🤣🌭❤️😍",
      },
      {
        id: 7,
        name: "Left title and right personimg",
        categories: ["Image", "Gradient", "Free"],
        image: siteURL + "/api/ogdesign/7left-title-right-personimg",
        path:
          siteURL +
          "/api/ogdesign/7left-title-right-personimg?title=APICrud&image=" +
          siteURL +
          "/vercel-og-assets/image/7image1.jpeg",
        //sources:
        // image=https://images.pexels.com/photos/9978709/pexels-photo-9978709.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 8,
        name: "Left title,button & price with right image-url",
        categories: ["Image", "Ecommerce", "Free"],
        image:
          siteURL + "/api/ogdesign/8left-url-title-price-right-brand-img-url",
        path:
          siteURL +
          "/api/ogdesign/8left-url-title-price-right-brand-img-url?title=Soma%20no%20Kouchi%20Ura%20-%20Cyclone%20Chee%20Japanese%20Handmade%20Cycling%20Cap&website=https://takachya.cc/&price=$69.99&image=" +
          siteURL +
          "/vercel-og-assets/image/8image1.jpg",
      },
      {
        id: 9,
        name: "Slanted Title",
        categories: ["Slanted", "Center", "Free"],
        image: siteURL + "/api/ogdesign/9slanted-title",
        path: siteURL + "/api/ogdesign/9slanted-title?title=APICrud",
      },
      {
        id: 10,
        name: "Slanted Background",
        categories: ["Slanted", "Center", "Free"],
        image: siteURL + "/api/ogdesign/10twocolorsbg-title",
        path: siteURL + "/api/ogdesign/10twocolorsbg-title?title=APICrud",
      },
    ],
  },
];
