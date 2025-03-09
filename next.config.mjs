/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  basePath: isProduction ? "/Portfolio" : "",
  env: {
    BASE_PATH: isProduction ? "/Portfolio" : "",
  },
};

export default nextConfig;
