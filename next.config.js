const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
})

module.exports = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "static-18x18.azureedge.net",
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}
