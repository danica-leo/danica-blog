const path = require('path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
        //css-loader将css文件解析成JS字符串
        //style-loader将JS字符串生成style标签插入文档
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
        //指定资源类型，webpack会根据文件大小自动在asset/resource和asset/inline之间选择
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/i,
        type: 'asset/resource'
        //成功解析资源，但字体样式不生效的时候，可以检查一下字体样式有没有写对
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      }
    ]
  }
}