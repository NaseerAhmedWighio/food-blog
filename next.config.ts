import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'cdn.sanity.io',
        //         // pathname: '/images/**',
        //     },
        // ],
    },
};

export default nextConfig;
