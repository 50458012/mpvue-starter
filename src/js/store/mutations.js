import {M_UPDATE_NUMBER, M_AJAX_TEST} from './types'

export default {
  [M_UPDATE_NUMBER] (state, num) {
    state.number += num
  },
  [M_AJAX_TEST] (state, data) {
    state.ajax = data
  }
}
