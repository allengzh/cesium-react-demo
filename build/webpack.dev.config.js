const webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'eval',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),

    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8888' })
  ],

  devServer: {
    host: 'localhost',
    port: 8888,
    hot: true,
    historyApiFallback: {
      index: '/assets/index.html',
      disableDotRule: true
    },
    disableHostCheck: true
  }
}
