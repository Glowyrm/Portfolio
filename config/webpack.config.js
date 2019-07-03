const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = {
    config:     path.resolve(__dirname, "../", 'config'),
    entry:      path.resolve(__dirname, "../", 'src', 'pages', 'main.js'),
    output:     path.resolve(__dirname, "../", 'docs')
}

console.log('\n')
console.log("entry  is: ", paths.entry,'\n');
console.log("output is: ", paths.output,'\n');

module.exports = {    

    entry: paths.entry,

    output: {
        path: paths.output,
        filename: 'main_[hash].js'
    },

    devServer: {
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",     // 3. Injects styles into DOM
                    "css-loader",       // 2. Turns CSS in to Common JS
                    "sass-loader"       // 1. Turns SASS into CSS
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../", 'src', 'html', 'index-template.html'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};