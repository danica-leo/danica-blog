const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "none",
  entry: {
    sharedIndex: 'lodash-es/join',
    sharedAnother: 'lodash/join',
    index: {
      import: './src/index.js',
      dependOn: 'sharedIndex'
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'sharedAnother'
    },
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "代码分离"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  }
}