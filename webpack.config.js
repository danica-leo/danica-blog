const path = require('path')

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        //css-loader将css文件解析成JS字符串
        //style-loader将JS字符串生成style标签插入文档
      }
    ]
  }
}