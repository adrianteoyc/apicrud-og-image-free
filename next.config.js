/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
        },
        {
          protocol: "https",
          hostname: "www.apicrud.com", // if your website has no www, drop it
        },
        {
          protocol: "https",
          hostname: "apicrud-og-image-free.vercel.app", // if your website has no www, drop it
        },
        {
          protocol: "https",
          hostname: "apicrud-og-image-premium.vercel.app", // if your website has no www, drop it
        },
      ],
    },
  };
  

module.exports = nextConfig
