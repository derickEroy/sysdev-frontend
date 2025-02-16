import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'reqres.in'
      }
    ]
  }
};

export default nextConfig;
