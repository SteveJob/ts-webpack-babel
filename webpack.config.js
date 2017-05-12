/**
 * Created by Administrator on 2017/5/12.
 */
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{

        }]

    },
    resolve: {

    },
    plugins: []
}
