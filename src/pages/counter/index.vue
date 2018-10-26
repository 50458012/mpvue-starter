<template>
  <div class="counter-warp">
    {{number}}

    <a class="button" @click="move(1)">+1</a>
    <br>
    <a class="button" @click="move(-1)">-1</a>
    <br>
    <a href="/pages/index" class="home">去往首页</a>
    <br>
    <span v-if="ajax" >
      这是koa后台发来的数据 =》 名字是：{{ajax.name}}，年龄是： {{ajax.age}}
    </span>
  </div>
</template>

<script>
import {A_UPDATE_NUMBER, M_UPDATE_NUMBER, A_AJAX_TEST} from 'TYPE'
import {mapState} from 'vuex'
export default {
  created() {
    this.$store.dispatch(A_AJAX_TEST)
  },
  mounted() {
    this.$store.dispatch(A_UPDATE_NUMBER).then(console.log)
  },
  computed: mapState({
    number: state => state.number,
    ajax: state => state.ajax
  }),
  methods: {
    move(num) {
      this.$store.commit(M_UPDATE_NUMBER, num)
    }
  }
}
</script>

<style>
.button {
  margin-bottom: 20px;
  text-align: center;
  background-color: #bfa;
  margin-bottom: 20px;
}
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
