/** @type {import('next').NextConfig} */
const nextConfig = {
    "distDir": "out",
    "output": "export",
    "trailingSlash": true,
    "images": {
        "unoptimized": true,
    },
    "eslint": {
        "ignoreDuringBuilds": true,
    },
    // "ignorePatterns": [
    //     "jest.config.js",
    //     "lib",
    //     "src/components/SvelteMainComponent.tsx",
    //
    // ],
    // output: 'export' enables static exports (see above)
    // "output": "standalone",
    "reactStrictMode": true,
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
