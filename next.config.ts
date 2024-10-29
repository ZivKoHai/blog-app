import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "**" },
      { hostname: "sijjlsdubmksrqrjhfka.supabase.co" },
    ],
  },
};

export default nextConfig;
