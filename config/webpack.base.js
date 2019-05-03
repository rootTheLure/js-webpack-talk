const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';


const extractLoader = ExtractCssChunks.loader;

const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, './dist');
const DIST_CLIENT_STATIC = path.resolve(DIST_DIR, './static');

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/index.js'],
        utils: './src/utils/actor.utils.js'
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            },
        {
            test: new RegExp('\\.s?css$'),
            use: [
                extractLoader,
                'css-loader',
                'sass-loader',
            ]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/*'], { root: ROOT_DIR }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractCssChunks({
            path: './dist',
            filename: '[name].[hash].css',
            chunkFilename: '[id].[contenthash].css',
        })
    ]
};