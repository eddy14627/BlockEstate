/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // for using static images
  experimental: {
    images: {
      images: {
        unoptimized: true,
      },
      trailingSlash: true,
    },
  },
};

module.exports = nextConfig;
