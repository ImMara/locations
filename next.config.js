/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['lh3.googleusercontent.com','maps.googleapis.com']
    },
    headers: () => [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ],
}

module.exports = nextConfig
