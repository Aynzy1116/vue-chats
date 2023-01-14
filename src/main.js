import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabaleMixin from './api/tabaleMixin'
import moment from 'moment'

Vue.config.productionTip = false
Vue.mixin(tabaleMixin)

Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
