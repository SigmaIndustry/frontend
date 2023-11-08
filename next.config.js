/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/WGNHxjJ/ryan-gosling-barbie-642c02bd77619.jpg',
            },
        ],
    },
}

module.exports = nextConfig
