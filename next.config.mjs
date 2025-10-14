/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mcnamara-site',
  assetPrefix: '/mcnamara-site',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
