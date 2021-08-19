const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [],
  },
  devServer: {
    historyApiFallback: true,
    static: commonPaths.outputPath,
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
