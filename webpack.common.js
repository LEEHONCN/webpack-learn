const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pagePath = path.resolve(__dirname, './src')

module.exports = {
  entry: getEntries(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    ...getHtmlWebpackPlugins()
  ]
}

function getFileNames(){
  return fs.readdirSync(pagePath).map(fileName => fileName.split('.')[0])
}

 function getEntries(){
  let obj = {};
   getFileNames().forEach((fileName) => {
      obj[fileName] = path.resolve(pagePath, fileName + '.js');
   });
  return obj;
}

function getHtmlWebpackPlugins(){
  let htmlPlugins = [];
  getFileNames().forEach((fileName) => {
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        // template: './template/index.html',
        chunks:[fileName],
        hash: false,
        minify: {
            removeAttributeQuotes:true,
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true
        }})
    );
  });
  return htmlPlugins;
};