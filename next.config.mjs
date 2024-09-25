/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Allow TypeScript build errors to be ignored
  },
  images: {
    remotePatterns: [
      // Patterns for remote images hosted on Convex domains
      {
        protocol: "https",
        hostname: "ideal-echidna-964.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "wary-gopher-177.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "sleek-capybara-771.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  env: {
    // Define environment variables accessible within the Next.js application
    CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },
};

export default nextConfig;
