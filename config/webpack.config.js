const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = {
    entry:      path.resolve(__dirname, "../", 'src', 'pages', 'main.js'),
    output:     path.resolve(__dirname, "../", 'docs'),
    
    source:     path.resolve(__dirname, "../", 'src'),
    config:     path.resolve(__dirname, "../", 'config')
}

// console.log('\n')
// console.log("entry  is: ", paths.entry,'\n');
// console.log("output is: ", paths.output,'\n');

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
                    "css-loader",       // 2. Converts CSS in to Common JS
                    "sass-loader"       // 1. Converts SASS into CSS
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.source, 'html', 'index-template.html'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};