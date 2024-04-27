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
      {
        source: "/api/authentication/:path*",
        destination: `${API_URL}/api/authentication/:path*`,
      },
    ];
  },
};

export default nextConfig;
