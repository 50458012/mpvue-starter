import Loading from './gloading'
const BASE_API = 'http://iuz9ai.natappfree.cc'
const gloading = new Loading({
  sync: true
})

function request (options) {
  return new Promise((resolve, reject) => {
    // 遮罩，默认不显示菊花
    if (options.mask) {
      // 这里写菊花转
      gloading.start()
    }
    const headers = options.header = options.header || {}
    // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
    options.timestamp = +new Date()
    let url = options.url
    // 简化类型设置
    if (options.json === false) {
      headers['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
      delete options.json
    }
    url = BASE_API + url
    wx.request({
      url: url,
      data: options.data,
      header: headers,
      method: options.method || 'get',
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res)
        } else {
          let message = res.data.message
          if (message.length > 15) {
            wx.showModal({
              title: '温馨提示',
              confirmText: '知道了',
              showCancel: false,
              content: message
            })
          } else {
            wx.showToast({
              icon: 'none',
              mask: true,
              title: message,
              duration: 3000
            })
          }
          reject(res)
        }
      },
      fail: reject,
      complete: (res) => {
        if (options.mask) {
          gloading.stop()
        }
      }
    })
  })
}

request.all = (arr) => Promise.all(arr.map(n => request(n)))

export default request
