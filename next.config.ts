import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // The stylesheet is the page's only render-blocking request; inlining it
    // removes that round trip (small CSS, single-page site).
    inlineCss: true,
  },
};

export default nextConfig;
