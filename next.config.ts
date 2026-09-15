import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sunnysideebikes.com",
      },
    ],
  },
};

export default nextConfig;
