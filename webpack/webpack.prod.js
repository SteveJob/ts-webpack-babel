/**
 * Created by Administrator on 2017/5/16.
 */
let webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: './src/modules/core/index.tsx',
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'bundle.js',
        publicPath: "/build/"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: '/node_modules'
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
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
        port: 8088,
        publicPath: ""
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}