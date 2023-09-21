/** @type {import('next').NextConfig} */
require('dotenv').config({ path: './.env' })
const webpack = require('webpack')
const dotenv = require('dotenv');

const nextConfig = {
  output: 'export',
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig
