import * as types from './types'
import $http from 'js/http'
export default {
  [types.A_UPDATE_NUMBER] ({commit}, num) {
    return new Promise((resolve, reject) => {
      let num = 20
      setTimeout(() => {
        resolve(num)
        commit(types.M_UPDATE_NUMBER, num)
      }, 3000)
    })
  },
  [types.A_AJAX_TEST] ({commit}, num) {
    return $http({
      url: '/about',
      mask: true
    }).then(({data = {}}) => {
      commit(types.M_AJAX_TEST, data)
    })
  }
}
