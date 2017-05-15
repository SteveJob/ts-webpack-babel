/**
 * Created by Administrator on 2017/5/12.
 */
const path = require('path')
// console.log(__dirname, __dirname + "/build")
module.exports = {
    entry: './src/modules/core/index.tsx',
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js'
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
    plugins: [],
    devServer: {
        compress: true,
        port: 8088
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}