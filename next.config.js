/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable server-side features since we're doing static export
  experimental: {
    appDir: true,
  },
  // Add trailing slashes for consistent routing
  trailingSlash: true,
}

module.exports = nextConfig 