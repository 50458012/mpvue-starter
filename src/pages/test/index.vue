<template lang="pug">
  .wrap
    p aaaaaaaaaaa
    p=$PATH
    img(src=$PATH + 'images/snake.jpg')
    #aaa 456456456456
</template>


<script>
// Use Vuex
import store from './store'
import http from '@/js/utils/http'
export default {
  created() {
    console.log(this.$store)
    http({
      url: '/',
      methods: 'get',
      mask: true
    }).then(console.log)
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './test.styl';
</style>

