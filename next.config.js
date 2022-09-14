/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    LW3DAO_CONTRACT_ADDRESS: process.env.LW3DAO_CONTRACT_ADDRESS,
    BUILDSPACE_CONTRACT_ADDRESS: process.env.BUILDSPACE_CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;
