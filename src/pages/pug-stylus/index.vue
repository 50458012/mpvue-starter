<template lang="pug">
  .wrap
    p 看看 PUG 的威力
    img(src=$PATH + "snake.jpg")
    .bg-logo 看看 stylus 的威力
    p.text 我是外部引入的样式表
    card(text="我是card组件")
</template>

<script>
import card from '@/components/card'
export default {
  components: {
    card
  },

  data () {
    return {
    }
  },

  created () {
  }
}
</script>

<style lang="stylus" scoped>
@import './index.styl'
.wrap
  font-size px2rpx(50)
  color #00cc72
.bg-logo
  color #000
  height px2rpx(233)
  width 100%
  background #a58 url($PATH + 'logo.png') center/100% no-repeat
</style>

