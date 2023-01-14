import request from '@/util/request.js'

const api = {
  getUsers: '/getUsers',  // 查看用户
  addUser: '/addUser',  // 新增用户
  login: '/login',  // 登录
  addFriends: '/addFriends',  // 添加好友
  getFriends: '/getFriends',  // 展示好友
}

export function getUsers () {
  return request({
    url: api.getUsers
  })
}

export function addUser (data) {
  return request({
    url: api.addUser,
    method: 'post',
    data: data
  })
}

export function login (data) {
  return request({
    url: api.login,
    method: 'get',
    params: data
  })
}

export function addFriends (data) {
  console.log('data', data)
  return request({
    url: api.addFriends,
    method: 'post',
    data: data
  })
}

export function getFriends (data) {
  return request({
    url: api.getFriends,
    method: 'get',
    params: data
  })
}