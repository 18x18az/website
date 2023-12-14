const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'standalone',
  assetPrefix: isProd ? 'https://18x18.azureedge.net' : undefined,
  compress: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-18x18.azureedge.net',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}
