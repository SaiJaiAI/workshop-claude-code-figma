import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/workshop-claude-code-figma',
  assetPrefix: '/workshop-claude-code-figma/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
