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
    "output": "export", // <=== enables static exports
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
    async rewrites() {
        return [
            {
                source: "/threejs-portal-effect",
                destination: "/threejs-portal-effect/index.html",
            },
            {
                source: "/threejs-portal-effect/:path*",
                destination: "/threejs-portal-effect/:path*",
            },
            {
                source: "/webxr-layers-start",
                destination: "/webxr-layers-start/index.html",
            },
            {
                source: "/webxr-layers-start/:path*",
                destination: "/webxr-layers-start/:path*",
            },
        ];
    },
};

export default nextConfig;
