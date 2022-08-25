// eslint-disable-next-line
import { BasicLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: { title: '主页', icon: 'home', keepAlive: false, permission: ['Home'] }
      },
      {
        path: '/Chat',
        name: 'Chat',
        component: () => import('@/views/Chats'),
        meta: { title: '聊天', icon: 'dollar', permission: ['Chat'] }
      },
      {
        path: '/Address',
        name: 'Address',
        component: () => import('@/views/Address'),
        meta: { title: '通讯录', icon: 'dollar', permission: ['Address'] }
      }
    ]
  }
//   {
//     path: '*',
//     redirect: '/404',
//     hidden: true
//   }
]

/**
 * 基础路由
 * @type { *[] }
 */
// export const constantRouterMap = [
//   {
//     path: '/user',
//     component: UserLayout,
//     redirect: '/user/login',
//     hidden: true,
//     children: [
//       {
//         path: 'login',
//         name: 'login',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
//       },
//       {
//         path: 'register-result',
//         name: 'registerResult',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
//       },
//       {
//         path: 'recover',
//         name: 'recover',
//         component: () => import('@/views/user/Recover')
//       }
//     ]
//   },

//   {
//     path: '/404',
//     component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
//   }
// ]
