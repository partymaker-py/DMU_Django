const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: 'C:/Users/boris/DMU/DMU/static', // TODO Изменить путь (Абсолютный)
  mode: 'production',
  entry: {
    mainPage: './js/main.js',
    careerPage: './js/career.js',
    contactsPage: './js/contacts.js',
    aboutCompanyPage: './js/aboutCompany.js',
    headerScrollAndPopupModule: './js/Modules/headerScrollAndPopupModule.js',
    searchFromPageModule: './js/Modules/searchFromPageModule.js',
    sliderUltraModule: './js/Modules/sliderUltraModule.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './DMU/static/dist')
  },
  plugins: [
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