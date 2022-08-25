import Vue from 'vue'
import VueRouter from 'vue-router'

import { asyncRouterMap } from '@/config/router.config'

Vue.use(VueRouter)

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})

export default router
