/** @type {import('next').NextConfig} */
const nextConfig = {
    "distDir": "out",
    "eslint": {
        "ignoreDuringBuilds": true,
    },
    // "ignorePatterns": [
    //     "jest.config.js",
    //     "lib",
    //     "src/components/SvelteMainComponent.tsx",
    //
    // ],
    "output": "export", // <=== enables static export; production server serves out/ as static files
    // "output": "standalone",
    "images": {
        "unoptimized": true, // required for static export
    },
    "reactStrictMode": true,
    "trailingSlash": true, // ensures /path/ → /path/index.html resolves correctly
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
