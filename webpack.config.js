const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/main.js'), // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'), // assumes your bundle.js will also be in the root of your project folder
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
