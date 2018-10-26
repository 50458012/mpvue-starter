'use strict'

import moment from 'moment'

var DAYS = ['日', '一', '二', '三', '四', '五', '六']
var MONTH_CH = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
var TODAY = moment().startOf('date')
var DAY_LABEL = ['今天', '明天', '后天']

var service = {
  DAYS: DAYS,
  TODAY: TODAY,
  MONTH_CH: MONTH_CH,
  SEX_TYPE: [{
    label: '男',
    value: 1
  }, {
    label: '女',
    value: 2
  }],
  CHANELTYPE: {
    0: '机票',
    21: '航意险',
    22: '延误险',
    23: '机票',
    24: '机票',
    25: '快递费',
    1: '酒店',
    31: '酒店',
    10: '火车票',
    11: '火车票',
    12: '铁意险',
    40: '用车',
    41: '用车',
    42: '用车',
    50: '国际机票',
    51: '国际机票',
    52: '快递费',
    53: '机票保险',
    60: '蜘蛛优选',
    61: '蜘蛛优选',
    1000: '其他',
    1001: '其他'
  },
  /**
   *
   * @param {*Double} num
   * @param {*Number} point
   */
  numberFormat (num, point) {
    if (typeof num !== 'number') {
      return
    }
    return num.toFixed(point || 2)
  },
  // 身份证号码处理
  idFilter (item) {
    if (!item.idcard) {
      return ''
    }
    if (parseInt(item.idtype) === 0) {
      return (item.idcard.slice(0, 4) + '***********' + item.idcard.slice(15))
    } else {
      return (item.idcard.slice(0, 2) + '**********' + item.idcard.slice(-1, item.idcard.length))
    }
  },
  formatDate (date, format) {
    return moment(date).format(format || 'YYYY-MM-DD')
  },
  getDayLabel (date, prefix) {
    var targetDate = moment(date).startOf('date')
    var diffDate = targetDate.diff(TODAY, 'days')
    return DAY_LABEL[diffDate] || (prefix || '周') + DAYS[targetDate.day()]
  },
  getNextDate (date, format) {
    var result = moment(date).startOf('date').add(1, 'days')
    format = ['string', 'undefined'].indexOf(typeof format) !== -1 ? format : null
    return format === undefined ? result : service.formatDate(result, format)
  },
  getPervDate (date, format) {
    var result = moment(date).startOf('date').subtract(1, 'days')
    format = ['string', 'undefined'].indexOf(typeof format) !== -1 ? format : null
    return format === undefined ? result : service.formatDate(result, format)
  },
  timeDiff (d1, d2, unit) {
    return moment(d1).diff(moment(d2), unit)
  },
  progressTimeFilter (data) {
    var diffMs = service.timeDiff(data.arrivetime, data.takeofftime)
    var msInMinute = 1000 * 60
    var msInHour = msInMinute * 60
    var hours
    var minutes
    hours = Math.floor(diffMs / msInHour)
    minutes = Math.floor((diffMs % msInHour) / msInMinute)
    return (hours ? hours + '小时' : '') + minutes + '分钟'
  },
  costFormat (val) {
    let m = val % 60
    let h = Math.floor(val / 60)
    let result = (h ? (h + '小时') : '00小时') + (m ? (m + '分') : '00分')
    return result
  },
  /**
   * 计算天数
   * @param startTime 乘车时间
   * @param runTimeSpan 运行分钟数
   * @returns {number}
   */
  day (startTime, runTimeSpan) {
    let startDate = new Date(service.formatDate(startTime, 'YYYY/MM/DD HH:mm:ss'))
    let runTime = parseInt(runTimeSpan, 10)
    let dayDate = new Date(service.formatDate(startTime, 'YYYY/MM/DD'))
    runTime = ((startDate - dayDate) / 60 / 1000) + runTime
    return Math.floor(runTime / 24 / 60)
  },
  // 转化对象为url参数
  ObjParseUrlParams (params) {
    let paramStr = ''
    if (params && typeof params === 'object') {
      for (var param in params) {
        paramStr += param + '=' + params[param] + '&'
      }
      paramStr = paramStr.substr(0, paramStr.length - 1)
    }
    return paramStr
  }
}

export default service
