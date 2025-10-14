/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mcnamara-site',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
