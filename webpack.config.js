const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
