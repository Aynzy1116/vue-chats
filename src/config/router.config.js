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
  //   {
  //     path: '*',
  //     redirect: '/404',
  //     hidden: true
  //   }
]
