require('./check-versions')()

const webpack = require('webpack')
const hardDisk = require('webpack-dev-middleware-hard-disk')
const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const webpackConfig = process.env.NODE_ENV === 'production'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

const compiler = webpack(webpackConfig)

module.exports = require('../servers/koa').listen(8080, () => {
  console.log('静态服务部署完毕：=> localhost:8080')
  hardDisk(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
  })
})
