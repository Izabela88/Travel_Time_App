const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dist = path.resolve(__dirname, "src/server/dist");

module.exports = {
  entry: {
    index: './src/client/index.js',
    trips: './src/client/trips.js'
  },
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    path: dist,
    libraryTarget: 'var',
    library: 'Client'
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: '[name].[ext]'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      inject: true,
      chunks: ['index'],
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/trips.html",
      inject: true,
      chunks: ['index'],
      filename: "./trips.html",
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new WorkboxPlugin.GenerateSW(),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    })
  ]
}