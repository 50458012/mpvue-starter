const STORAGE_A = 'STORAGE_A'
const STORAGE_B = 'STORAGE_B'

export const storage = {
  set tSearchParams (val) {
    try {
      wx.setStorageSync(STORAGE_A, val)
    } catch (e) {}
  },
  get tSearchParams () {
    var value = null
    try {
      value = wx.getStorageSync(STORAGE_A) || null
    } catch (e) {}
    return value
  },
  set tfilterListFilter (val) {
    try {
      wx.setStorageSync(STORAGE_B, val)
    } catch (e) {}
  },
  get tfilterListFilter () {
    var value = null
    try {
      value = wx.getStorageSync(STORAGE_B) || null
    } catch (e) {}
    return value
  }
}
