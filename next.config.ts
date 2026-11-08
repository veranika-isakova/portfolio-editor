import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects/pavel", destination: "/projects/lights", permanent: false },
      { source: "/projects/musia", destination: "/projects/lights", permanent: false },
    ]
  },
};

export default nextConfig;
