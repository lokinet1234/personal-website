/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    domains: ['localhost'],
  },
  // Optional: Add basePath if deploying to a subdirectory
  // basePath: '/personal-website',
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
  // Optional: Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Optional: Add asset prefix if using a CDN
  // assetPrefix: isProduction ? 'https://cdn.yourdomain.com' : '',
  swcMinify: true,
}

module.exports = nextConfig
