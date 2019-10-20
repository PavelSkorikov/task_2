var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: './dist',
    overlay: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
        }
      },
      
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [
          path.resolve(__dirname, "./src/fonts") //исключаем файлы svg - шрифтов (остаются только картинки)
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'  
            } 
          }
        ]           
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: [
          path.resolve(__dirname, "./src/fonts") // выбираем только svg-файлы шрифты
        ],
        use: [   {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'  
            } 
          }
        ]   
      }
    ]
  },

  plugins: [ 
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, "./src/index.pug")
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
