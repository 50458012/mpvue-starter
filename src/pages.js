module.exports = [
  {
    path: 'pages/index' // 页面路径，同时是 vue 文件相对于 src 的路径
  }, {
    path: 'pages/counter',
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '测试vuex & ajax'
    }
  }, {
    path: 'pages/pug-stylus',
    config: {
      navigationBarTitleText: '使用预编译 pug & stylus'
    }
  }
]
