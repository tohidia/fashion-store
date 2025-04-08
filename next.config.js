// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['example.com', 'anotherdomain.com'], // Add allowed domains here
    },
  }
  
  export default nextConfig;
  