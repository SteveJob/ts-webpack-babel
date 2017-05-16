/**
 * Created by Administrator on 2017/5/16.
 */
module.exports = (env) => {
    return require(`./webpack/webpack.${env}.js`)
}