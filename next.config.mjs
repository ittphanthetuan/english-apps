/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';
import { StrictMode } from 'react';

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  // images: {
  //   localPatterns: [
  //     {
  //       pathname: '/assets/images/**',
  //       search: '',
  //     },
  //   ],
  // },
  videos: {

  }
};

// export default nextConfig;
export default nextConfig;
