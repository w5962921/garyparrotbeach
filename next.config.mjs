/** @type {import('next').NextConfig} */
const nextConfig = {
  // This forces Next.js to realize your files are sitting right in the root!
  experimental: {
    appDir: false
  }
};

export default nextConfig;
