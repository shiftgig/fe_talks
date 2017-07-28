const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path
  },

  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  module: config.module
};