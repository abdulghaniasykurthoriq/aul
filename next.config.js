/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Hindari optimasi gambar otomatis di Vercel
  },
};

module.exports = nextConfig;
