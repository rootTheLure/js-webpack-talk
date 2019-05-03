import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import devConfig from './webpack.dev.config';
import prodConfig from './webpack.prod.config';

const DEV = process.APP_ENV === 'development';

const envConfig = DEV ? devConfig : prodConfig;
const config = merge(baseConfig, envConfig);

export default config;
