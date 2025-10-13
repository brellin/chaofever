/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "./variables.scss";`
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
