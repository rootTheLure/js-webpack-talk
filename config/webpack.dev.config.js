const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, './dist');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 9000
    }
};
