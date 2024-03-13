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
  },
  experimental: {
    headers() {
      return [
        {
          source: "/.well-known/apple-developer-merchantid-domain-association",
          headers: [{ key: "content-type", value: "application/json" }]
        }
      ];
    }
  }
};

module.exports = nextConfig;
