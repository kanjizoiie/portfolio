const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './static/index.html',
  filename: 'index.html',
  inject: 'body'
});
const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
		path.join(__dirname, '/src/index.js')
	],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test:/\.(scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig]
}