/** @type {import('next').NextConfig} */

import { createRequire } from "module";

//  image optimization
const require = createRequire(import.meta.url);

const { execSync } = require("child_process");

// bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("⚡ Generating optimized images...");
      execSync("node scripts/generate-images.js", { stdio: "inherit" });
    }
    return config;
  },
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

export default nextConfig;





// for bundler analyser
/** @type {import('next').NextConfig} */
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: true,
// });

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     formats: ["image/avif", "image/webp"], // enable modern formats
//   },
//   reactStrictMode: true,
// };

// export default withBundleAnalyzer(nextConfig);


