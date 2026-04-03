import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/proporcion-aurea-oposiciones",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
