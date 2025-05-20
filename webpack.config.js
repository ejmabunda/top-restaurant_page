const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            // handles images we reference in our HTML template
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            // handles images we reference in our JavaScript
            test: /\.(png|svg|jpg|jped|gif)$/i,
            loader: "asset/resource",
        },
    ],
  },
};
