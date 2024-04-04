/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xgr3seh2mgmhmtft.public.blob.vercel-storage.com'
      }
    ]
  }
};

export default nextConfig;
