/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vishvsalvi.vercel.app',
      },
    ],
  },
};

export default nextConfig;
