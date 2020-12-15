const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './DMU/static/js/main.js',
        contacts: './DMU/static/js/contacts.js',
        career: './DMU/static/js/career.js',
        aboutCompany: './DMU/static/js/aboutCompany.js',
        headerScrollAndPopupModule: './DMU/static/js/Modules/headerScrollAndPopupModule.js',
        movingCardsModule: './DMU/static/js/Modules/movingCardsModule.js',
        searchFromPageModule: './DMU/static/js/Modules/searchFromPageModule.js',
        sliderUltraModule: './DMU/static/js/Modules/sliderUltraModule.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'DMU/static/FonrontBuild')
    },
    plugins: [
        new CleanWebpackPlugin(), 
    ],
    module: {
        rules: [
            {
                // конфиг для стилей
                test:/\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                // конфиг для шрифта (шрифты должны быть в отдельном файле)
                test: /\.(ttf|wof)$/,
                use: ['file-loader']
            }
        ]
    }
    
}