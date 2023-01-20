import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabaleMixin from './api/tabaleMixin'
import moment from 'moment'
import $commonHelper from '@/util/util.js'

Vue.config.productionTip = false
Vue.mixin(tabaleMixin)

moment.locale('zh-cn')  // 设置为中文环境
Vue.prototype.$moment = moment
Vue.prototype.$commonHelper = $commonHelper;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
