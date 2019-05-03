const path = require('path');

const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, './dist');

module.exports = {
    mode: 'production'
};