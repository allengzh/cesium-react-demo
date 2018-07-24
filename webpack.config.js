const baseConfig = require('./build/webpack.base.config')
const merge = require('webpack-merge')

module.exports = (env = {}) => {
  const envConfig = require(`./build/webpack.${env.prod ? 'prod' : 'dev'}.config.js`)

  return merge(baseConfig, envConfig)
}
