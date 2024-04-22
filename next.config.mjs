const API_URL = "http://localhost:8080";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  async rewrites() {
    return [
      {
        source: "/api/protected/:path*",
        destination: `${API_URL}/api/protected/:path*`,
      },
      { source: "/api/auth/:path*", destination: `${API_URL}/api/auth/:path*` },
    ];
  },
};

export default nextConfig;
