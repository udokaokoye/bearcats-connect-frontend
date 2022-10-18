/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.istockphoto.com',
      "images.unsplash.com",
      ""
    ]
  }
}

module.exports = nextConfig
