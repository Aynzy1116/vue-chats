import Vue from 'vue'

const state = {
  socket: null,
  myUser: {
    name: 'lz',
    userId: 857
  }, // 自己的信息
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
  chatList: {} // 聊天的消息
}

const mutations = {
  setSocket: (state, socket) => {
    state.socket = socket
  },
  clearSocket: (state, socket) => {
    state.socket.disconnect() // 断开连接
    state.socket = socket
  },
  // 将收到的消息置顶
  topUser: (state, id) => {
    state.userList.map((item, i) => {
      if (item.userId === id) {
        state.userList.unshift(state.userList.splice(i, 1)[0])
      }
    })
  },
  SET_CHATLIST: (state, info) => {
    const my = JSON.parse(localStorage.getItem('userInfo'))
    info.msg = info.msg.trim()
    console.log('info', info)
    if (my.id === info.from_Id) {
      if (state.chatList[info.to_Id] === undefined) {
        Vue.set(state.chatList, info.to_Id, []) // 使用Vue.set 不然监听不到
      }
      state.chatList[info.to_Id].push(info)
    } else {
      if (state.chatList[info.from_Id] === undefined) {
        Vue.set(state.chatList, info.from_Id, []) // 使用Vue.set 不然监听不到
      }
      state.chatList[info.from_Id].push(info)
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
  // 将聊天信息保存
  setChatList ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      commit('SET_CHATLIST', data)
      resolve()
      // eslint-disable-next-line prefer-promise-reject-errors
      reject()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
