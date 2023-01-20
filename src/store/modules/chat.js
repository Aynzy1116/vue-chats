import Vue from 'vue'
import $commonHelper from '@/util/util.js'

const state = {
  socket: null,
  myUser: JSON.parse(localStorage.getItem('userInfo')) || {}, // 自己的信息
  otherUserInfo: {}, // 当前聊天用户信息
  userList: [
    {
      name: 'aaa',
      userId: 1,
      message: '在干啥'
    }, {
      name: 'bbb',
      userId: 2,
      message: '我累了'
    }
  ], // 所有用户
  allChatList: new Map() // 聊天的消息
}

const mutations = {
  setSocket: (state, socket) => {
    state.socket = socket
  },
  clearSocket: (state, socket) => {
    state.socket.disconnect() // 断开连接
    state.socket = socket
  },
  // 初始存储聊天信息
  setAllChatList (state, data) {
    state.allChatList = data
  },
  // 将收到的消息置顶
  topUser: (state, id) => {
    let lists = $commonHelper.changeMap(state.allChatList)
    lists.forEach((item, i) => {
      if (item.id === id) {
        lists.unshift(lists.splice(i, 1)[0])
      }
    })
    state.allChatList = $commonHelper.changeArray(lists)
  },
  // 登录的用户信息
  login: (state, userInfo) => {
    console.log('userInfo', userInfo)
    state.myUser = userInfo
  },
  // 保存聊天信息
  setChatList: (state, info) => {
    const my = JSON.parse(localStorage.getItem('userInfo'))
    info.message = info.message.trim()
    if (my.id === info.from_id) {
      // if (!state.allChatList.has(info.to_id)) {
      //   state.allChatList.set(info.to_id, [])
      // }
      state.allChatList.get(info.to_id).messages.push(info)
    } else {
      // if (!state.allChatList.has(info.from_id)) {
      //   state.allChatList.set(info.from_id, [])
      // }
      state.allChatList.get(info.from_id).messages.push(info)
    }
  },
  SET_USERINFO: (state, info) => {
    state.otherUserInfo = info
  }
}
const actions = {
  // 设置聊天的用户
  setOtherUserInfo ({
    commit
  }, otherUserInfo) {
    return new Promise((resolve, reject) => {
      if (otherUserInfo) {
        commit('SET_USERINFO', otherUserInfo)
        resolve(otherUserInfo)
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      reject()
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
