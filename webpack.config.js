import path from "path";
import { default as MiniCssExtractPlugin } from "mini-css-extract-plugin";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { default as HtmlWebpackPlugin } from "html-webpack-plugin";
import { default as FaviconsWebpackPlugin } from "favicons-webpack-plugin";

export default {
  entry: "./src/index.ts",
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: false,
      inject: "body",
      meta: {
        charset: "UTF-8",
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicons/favicon.png", // svg works too!
      favicons: {
        appName: "advice-generator-app",
        icons: {
          coast: false,
          yandex: false,
          appleStartup: false,
        },
      },
    }),
  ],
  watch: false,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].[contenthash].js",
  },
  optimization: {
    realContentHash: false,
  },
};
