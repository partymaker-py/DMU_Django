const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    mainPage: 'C:/Users/boris/DMU/DMU/static/js/main.js',
    careerPage: 'C:/Users/boris/DMU/DMU/static/js/career.js',
    contactsPage: 'C:/Users/boris/DMU/DMU/static/js/contacts.js',
    aboutCompanyPage: 'C:/Users/boris/DMU/DMU/static/js/aboutCompany.js',
    headerScrollAndPopupModule: 'C:/Users/boris/DMU/DMU/static/js/Modules/headerScrollAndPopupModule.js',
    searchFromPageModule: 'C:/Users/boris/DMU/DMU/static/js/Modules/searchFromPageModule.js',
    sliderUltraModule: 'C:/Users/boris/DMU/DMU/static/js/Modules/sliderUltraModule.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './DMU/static/dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer'
                ]
              }
            }
          },
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: 'file-loader'
      }
    ]
  },
}