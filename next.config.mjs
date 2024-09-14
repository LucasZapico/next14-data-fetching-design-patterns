/**
 * 
 */
export const projectDir = process.cwd()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // config.infrastructureLogging = { debug: /PackFileCache/ },
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };

    return config;
  }
};

export default nextConfig;
