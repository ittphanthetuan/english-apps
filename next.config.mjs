/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
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
