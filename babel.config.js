/**
 * Where babel can scan for .babelrc files. Babel ignores other locations.
 * Not used in test env because of errors in jest-enzyme: only current root config is used
 */
const BABELRC_ROOTS = [
  // Keep current root
  '.',
  // Also consider monorepo packages "root" and load their .babelrc files.
  './src/node_modules/*',
];

/**
 * https://babeljs.io/docs/en/config-files
 */
module.exports = {
  presets: [
    ['@babel/preset-env', {
      /**
       * Requires entry @babel/polyfill in webpack.config.js
       * TODO: switch to 'usage' option as soon as it's non-experimental
       */
      useBuiltIns: 'entry',
      corejs: 3,
    }],
    '@babel/preset-react',
  ],
  plugins: [
    // This handsome stuff is not yet in preset-env...
    '@babel/plugin-proposal-class-properties',
    /**
     * https://babeljs.io/docs/en/babel-plugin-transform-runtime
     * Injects regenerator automatically, thus it may not be separate included.
     */
    ['@babel/plugin-transform-runtime', {
      helpers: false, // Default: true, but breaks tests modules containing generators
    }],
    '@babel/syntax-dynamic-import',
    /**
     * https://github.com/faceyspacey/babel-plugin-universal-import
     * Is required to provide instant dynamic import module load on server side
     */
    'universal-import',
    // Considering agreement of separate import it's always nice to have safety pillar
    'lodash',
  ],
  // Include env specific stuff
  // https://babeljs.io/docs/en/options#merging
  env: {
    // Prod merges config
    production: {
      plugins: [
        'transform-react-remove-prop-types',
      ],
      babelrcRoots: BABELRC_ROOTS,
    },
    // Dev merges config
    development: {
      babelrcRoots: BABELRC_ROOTS,
    },
    // Test merges config
    test: {},
  },
};
