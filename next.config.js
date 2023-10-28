/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net",
            },
            {
                hostname: "youtube.com",
            }
        ]
    }
}

module.exports = nextConfig
