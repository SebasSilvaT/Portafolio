/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    basePath: isProd ? "/Portafolio" : undefined,
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/Portafolio" : "",
    }
};

export default nextConfig;