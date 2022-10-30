/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.istockphoto.com',
      "images.unsplash.com",
      "192.168.1.51"
    ]
  }
}

module.exports = nextConfig
