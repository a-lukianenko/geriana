const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // sourceMapContents: false,
            },
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash].[ext]",
              outputPath: "img",
              // publicPath: "img",
            },
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              // publicPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({ patterns: [{ from: "src/img", to: "img" }] }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
