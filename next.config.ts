/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'logodownload.org',
        pathname: '/wp-content/**',
      }
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:8000'],
      bodySizeLimit: '2mb'
    },
  },
}

module.exports = nextConfig
