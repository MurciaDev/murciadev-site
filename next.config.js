/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@murciadev/components']);

module.exports = {};

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
