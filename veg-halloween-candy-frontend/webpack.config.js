const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
          presets: ['@babel/preset-env', "@babel/react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000'] },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: 'index.html',
      inject: "body"
    }),
    new BundleAnalyzerPlugin()
  ]
}
