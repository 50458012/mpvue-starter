var regs = {
  empty: /^\s*$/,
  phoneNumber: /^1[3|4|5|7|8]\d{9}$/,
  chineseName: /^[\u4e00-\u9fa5a-z]{1,12}$/i,
  englishName: /^[a-z][a-z ]+(\s*\/\s*[a-z ]+)?$/i,
  idcard: /^\d{6}(\d{4})(\d{2})(\d{2})\d{3}[0-9x]$/i,
  email: /^.+@.+\..+$/,
  chinesePassport: /^(?:(?:[DSP]E|E\d)\d{7})|(?:[GDSP]\d{8})$/,
  telphone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
  postCode: /^[1-9]\d{5}$/,
  invoiceCode: /^[a-z0-9A-Z]+$/,
  integer: /^\d+$/,
  money: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
}
module.exports = {
  regs,
  isEmpty (str) {
    return regs.empty.test(str)
  },
  isPhoneNumber (num) {
    return regs.phoneNumber.test(num)
  },
  isChineseName (name) {
    return regs.chineseName.test(name)
  },
  isEnglishName (name) {
    return regs.englishName.test(name) && name.length <= 29
  },
  isEmail (email) {
    return regs.email.test(email)
  },
  isChinesePassport (passport) {
    return regs.chinesePassport.test(passport)
  },
  isTelphone (telphone) {
    return regs.telphone.test(telphone)
  },
  isIdCard (idcard) {
    return regs.idcard.test(idcard)
  },
  isPostCode (postCode) {
    return regs.postCode.test(postCode)
  },
  parseBirthdayIdCard (idcard) {
    return regs.idcard.exec(idcard).slice(1)
  },
  isInvoiceCode (invoice) {
    return regs.invoiceCode.test(invoice)
  },
  isInteger (num) {
    return regs.integer.test(num)
  },
  isMoney (num) {
    return regs.money.test(num)
  }
}
