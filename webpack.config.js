/**
 * Created by Administrator on 2017/5/12.
 */
const path = require('path')
// console.log(__dirname, __dirname + "/build")
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: '/node_modules'
        }]

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'json']
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