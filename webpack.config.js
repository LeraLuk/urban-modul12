const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_odules/,
      },
    ],
  },
  mode: "development",
  plugins: [new Dotenv()],
};
