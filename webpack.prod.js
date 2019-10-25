const merge = require('webpack-merge');
const common = require('./webpack.common');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    // new UglifyJSPlugin(),
    new CleanWebpackPlugin(),
    new ManifestPlugin()
  ]
});