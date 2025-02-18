import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.jobvortex.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
