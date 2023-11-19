const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
})

module.exports ={
  output:"standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "18x18images.blob.core.windows.net",
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}
