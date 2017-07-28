const webpack = require('webpack')
const config = require('./config')
const publicPath = '/'

module.exports = {
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path,
    publicPath: publicPath
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: config.output.path,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: config.module
};