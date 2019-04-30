const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: './src/app.js',
    devtool: 'cheap-source-map',
    mode: 'development',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, outputDirectory),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};