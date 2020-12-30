const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// TODO ипортировать css в соответствющие js файлы
// TODO ипортировать статические картинки в корректные js файлы
// TODO доделать опимизацию html файлов

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  config.minimizer = [
    new OptimizeCssAssetsWebpackPlugin(),
    new TerserWebpackPlugin()
  ]
  return config
}

module.exports = {
  context: 'C:/Users/boris/DMU/DMU/static', // TODO Изменить путь (Абсолютный)
  mode: 'development',
  entry: {
    mainPage: './js/main.js',
    careerPage: './js/career.js',
    contactsPage: './js/contacts.js',
    aboutCompanyPage: './js/aboutCompany.js',
    movingCardsModule: './js/Modules/movingCardsModule.js',
    headerScrollAndPopupModule: './js/Modules/headerScrollAndPopupModule.js',
    searchFromPageModule: './js/Modules/searchFromPageModule.js',
    sliderUltraModule: './js/Modules/sliderUltraModule.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './DMU/static/dist')
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      // template: './DMU/templates/index.html',
      minify: {
        collapseWhitespace: true // оптимизирует html
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    ]
  },
}