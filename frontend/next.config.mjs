/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: function (config, options) {
        config.experiments = {
            topLevelAwait: true,
            layers: true,
            asyncWebAssembly: true
        }
        return config;
    }
};

export default nextConfig;
