const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});


const parentDir = path.join(__dirname, '../');
module.exports = {
    entry: {
        'bundle.js': [
            path.join(__dirname, '/src/index.js')
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader', ]
        }],
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig]
};