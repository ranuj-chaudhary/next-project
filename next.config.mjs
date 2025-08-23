/** @type {import('next').NextConfig} */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"], // enable modern formats
  },
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
