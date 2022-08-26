import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabaleMixin from './api/tabaleMixin'

Vue.config.productionTip = false

Vue.mixin(tabaleMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
