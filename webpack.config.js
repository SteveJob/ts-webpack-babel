/**
 * Created by Administrator on 2017/5/12.
 */
const path = require('path')
const webpack = require('webpack')
// console.log(__dirname, __dirname + "/build")
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js',
        publicPath: "/build/"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: '/node_modules'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                    modules: true
                }
            }, {
                loader: "less-loader",
                options: {
                    sourceMap: true,
                    modules: true
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'json', '.css', '.less']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({

        }),
        new webpack.DefinePlugin({

        })
    ],
    devServer: {
        compress: true,
        port: 8088
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}