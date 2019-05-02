const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, './dist');

module.exports = {
    entry: './src/index.js',
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
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
            query:
              {
                presets:['react']
              }
            },
        {
            test: /\.s?css$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/*'], { root: ROOT_DIR }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};