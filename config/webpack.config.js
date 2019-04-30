const path = require('path');

const outputDirectory = 'dist';

module.exports = {
    entry: './src/app.js',
    mode: 'none',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'app.bundle.js'
    }
};