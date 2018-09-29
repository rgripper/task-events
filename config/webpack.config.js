const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths');

module.exports = {
  entry: paths.appIndex,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin({ })]
  },
  output: {
    filename: 'bundle.js',
    path: paths.appBuild
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.appHtml
    })
  ]
}