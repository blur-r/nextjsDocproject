import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // ✅ replaces `ppr: 'incremental'`
  },
};

export default nextConfig;
