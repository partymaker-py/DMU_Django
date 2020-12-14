const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { ModuleFilenameHelpers } = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'static'),
    mode: "development",
    entry: {
        main: "./DMU/static/js/Modules/headerScrollAndPopupModule.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'DMU/static/dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'DMU/templates/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers:['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                }
            ]
            }
        ]
    }
    
};