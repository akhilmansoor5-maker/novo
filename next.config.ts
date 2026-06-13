import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/novo",
  assetPrefix: "/novo/",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
