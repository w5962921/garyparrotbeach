/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      aliases: {
        '@/components/*': ['./components/*'],
      },
    },
  },
};

export default nextConfig;
