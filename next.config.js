/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
