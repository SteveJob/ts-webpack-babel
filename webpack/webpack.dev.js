/**
 * Created by Administrator on 2017/5/16.
 */
var webpack = require('webpack')
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
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "less-loader",
                options: {

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
        port: 8088,
        //设置为true，当源文件改变时会自动刷新页面
        inline: true,
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        historyApiFallback: true
    },
    devtool: 'cheap-module-source-map',
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}