/** @type {import('next').NextConfig} */
const nextConfig = {
    "distDir": "out",
    "eslint": {
        "ignoreDuringBuilds": true,
    },
    "images": {
        "unoptimized": true,
    },
    "output": "export", // <=== enables static exports
    "reactStrictMode": true,
    "trailingSlash": true,
    "typescript": {
        // !! WARN !!
        // Dangerously allow production builds to
        //  successfully complete even if
        // your project has type errors.
        // !! WARN !!
        "ignoreBuildErrors": true,
    },
};

export default nextConfig;
