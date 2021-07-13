const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode : 'development',
  entry : {
    main : './babel/babelTest.js'
  },
  output : {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : [
          // path.resolve('./my-webpack-loader2.js'),
          // path.resolve('./my-webpack-loader.js')
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(jpg|png|gif)$/,
        loader : 'url-loader',
        options : {
          publicPath : './',
          name : '[name].[ext]?[hash]',
          limit : 20000, //2kb 미만은 url-loader에서 base64로 변환. 그 이상은 파일을 복사.
        }
      },
      {
        test:/\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/
      }
    ]
  },
  plugins : [
    new webpack.BannerPlugin({banner : `
    Build Date : ${new Date().toLocaleString()}
    My name : ${childProcess.execSync('git config user.name')}
    `}),
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template : './src/index.html',
      templateParameters : {
        env : process.env.NODE_ENV === 'development' ? '개발용' : 'asd'
      }
    })
  ]
}