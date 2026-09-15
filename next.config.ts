import type { NextConfig } from "next";

/**
 * Smartflowy Solutions — fully static website.
 *
 * `output: "export"` builds a complete static site into the `out/` folder.
 * There is no backend, no server code, and no database — the site can be
 * hosted anywhere static files can be served (Vercel, Netlify, etc.).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required for static export — images are served as-is from /public.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
