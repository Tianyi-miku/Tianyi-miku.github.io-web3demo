/** @type {import('next').NextConfig} */
// require('dotenv').config({ path: './.env' })
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/Tianyi-miku.github.io-web3demo/' : ''

const nextConfig = {
  assetPrefix: assetPrefix,
  // output: 'export',
  async redirects() {
    return [
      {
        source: '/Tianyi-miku.github.io-web3demo/',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig
