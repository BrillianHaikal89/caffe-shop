// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'via.placeholder.com'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig;