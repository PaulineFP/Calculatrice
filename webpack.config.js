const path = require("path");

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/asset/",
    filename: "[name].bundle.js",
  },
  mode: 'development',
  devServer: {
   // static: {path.join(__dirname, './public')},
   static: "./public",
   //compress: true,// active la compression gzip
  // open: true,
  // historyApiFallback: true, // true pour index.html sur 404, objet pour plusieurs chemins
   // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
   // https: false,
   port: 3000,
 },
 module: {
   rules: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
     {
       test: /\.(scss|css)$/,
       use: ["style-loader", "css-loader"],
     },
     {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      type: 'asset/inline'
    },
    {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      type: 'asset/resource',
      generator: {
        //publicPath: '../fonts/',
      filename: 'compiled/fonts/[hash][ext][query]'
      }
    }
  ]
 },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),

  ],
}