import Vue from 'vue'
import App from '@/App'
import store from '@/js/store'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$store = new Vuex.Store(store)

// App.store = store
// App.mpType = 'app'

const app = new Vue(App)
app.$mount()
