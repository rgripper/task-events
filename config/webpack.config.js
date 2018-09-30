const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths');
const appSettings = require('../appSettings.json');

const isDevServer = process.argv.some(v => v.includes('webpack-dev-server'));

module.exports = {
  entry: paths.appIndex,
  devtool: 'cheap-module-eval-source-map',
  externals: {
    appSettings
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})]
  },
  output: {
    filename: isDevServer ? '[name].[hash].js' : '[name].[chunkhash].js',
    path: paths.appBuild,
    publicPath: '', // relative path for Github deployment
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.appHtml
    })
  ]
}