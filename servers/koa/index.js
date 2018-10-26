const app = new (require('koa'))() ;

const path = require('path') ;
const static = require('koa-static') ;

// 静态资源部署
app.use(static(path.join(process.cwd(), 'static')));

//  koa-body request body 解析
app.use(require('koa-body')())

// 路由服务API
const fs = require('fs') ;
const router = require('koa-router')() ;
const server = {};
const routeDir = path.join(__dirname, '../routers') ;
const serverDir = path.join(__dirname, '../service') ;
fs.readdirSync(serverDir).forEach(file => {
  const FILE = path.parse(file);
  if (FILE.ext === '.js') {
    server[FILE.name] = require(path.join(serverDir, file));
  }
})

fs.readdirSync(routeDir).forEach(file => {
  if (path.parse(file).ext === '.js') {
    require(path.join(routeDir, file))(router, server)
  }
})
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app ;


