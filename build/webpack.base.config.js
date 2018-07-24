const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(relativePath) {
  return path.join(__dirname, '..', relativePath)
}

const lessLoader = {
  loader: 'less-loader',
};

module.exports = {
  entry: {
    app: './src/index',
    antd: [
      'antd/lib/table',
      'antd/lib/icon',
      'antd/lib/card',
      'antd/lib/select',
      'antd/lib/row',
      'antd/lib/col',
      'antd/lib/button',
    ]
  },

  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/assets/'
  },

  module: {
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', lessLoader],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('src'),
    ],
    alias: {
      '@': resolve('src'),
      'api': resolve('src/api'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
      'views': resolve('src/views')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['antd', 'vendor'],
      minChunks: Infinity
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: resolve('public'),
    historyApiFallback: true,
    port: 3000,
    compress: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  },
  node: {
    fs: "empty"
  }
}
