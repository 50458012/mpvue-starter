# mpvue-test

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

###  1：本套模板在官方基础上针对开发环境图片地址问题经过特殊处理
config/index.js   里面build： {IMG_PATH} 字段配置您的生产环境图片地址，本地图片地址为localhost:8080 映射

 ###  2：本模板提供了个koa 本地服务器 对应简单写了几个接口  为了调试ajax

 ## 映射本地服务器为外网服务器方法  https://natapp.cn/ 配合servers文件夹下的routers 和service可以模拟ajax
 
 ### 本模板优化了page和vuex  不必一次次的去new VUE   new VUEX  集中化管理


