/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'izssqldldcgykfuoqepr.supabase.co'
      },
    ],
  }
};

module.exports = nextConfig;
