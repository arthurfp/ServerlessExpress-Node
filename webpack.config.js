const path = require('path');

module.exports = {
  entry: './sls.js', // entry-point
  mode: 'production',
  output: {
    filename: 'pro.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  target: 'node', // must-have
};
