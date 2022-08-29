// eslint-disable-next-line
import { BasicLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/User')
  },
  {
    path: '/user',
    name: 'user',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/user/Chat',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: { title: '主页', icon: 'home', keepAlive: false, permission: ['Home'] }
      },
      {
        path: 'Chat',
        name: 'Chat',
        component: () => import('@/views/Chats'),
        meta: { title: '聊天', icon: 'dollar', permission: ['Chat'] }
      },
      {
        path: 'Address',
        name: 'Address',
        component: () => import('@/views/Address'),
        meta: { title: '通讯录', icon: 'dollar', permission: ['Address'] }
      }
    ]
  }
]

// export const asyncRouterMap = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('@/views/User'),
//     redirect: '/user'
//   },
//   {
//     path: '/a',
//     name: 'user',
//     component: BasicLayout,
//     meta: { title: 'menu.home' },
//     redirect: '/a/Home',
//     children: [
//       {
//         path: '/Home',
//         name: 'Home',
//         component: () => import('@/views/Home'),
//         meta: { title: '主页', icon: 'home', keepAlive: false, permission: ['Home'] }
//       },
//       {
//         path: '/Chat',
//         name: 'Chat',
//         component: () => import('@/views/Chats'),
//         meta: { title: '聊天', icon: 'dollar', permission: ['Chat'] }
//       },
//       {
//         path: '/Address',
//         name: 'Address',
//         component: () => import('@/views/Address'),
//         meta: { title: '通讯录', icon: 'dollar', permission: ['Address'] }
//       }
//     ]
//   }
//   //   {
//   //     path: '*',
//   //     redirect: '/404',
//   //     hidden: true
//   //   }
// ]
