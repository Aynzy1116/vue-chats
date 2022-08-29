import Vue from 'vue'

const state = {
  myUser: {
    name: 'lz',
    userId: 857
  }, // 自己的信息
  userInfo: {}, // 当前聊天用户信息
  chatList: {} // 聊天的消息
}

const mutations = {
  SET_CHATLIST: (state, info) => {
    if (state.chatList[state.userInfo.userId] === undefined) {
      Vue.set(state.chatList, state.userInfo.userId, []) // 使用Vue.set 不然监听不到
    }
    info.msg = info.msg.trim()
    console.log('info', info)
    state.chatList[state.userInfo.userId].push(info)
    // console.log('chatList', state.chatList[state.userInfo.userId])
    // console.log('chatList', state.chatList)
  },
  SET_USERINFO: (state, info) => {
    state.userInfo = info
  }
}
const actions = {
  getUserInfo ({
    commit
  }, userInfo) {
    return new Promise((resolve, reject) => {
      if (userInfo) {
        commit('SET_USERINFO', userInfo)
        resolve(userInfo)
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      reject()
    })
  },
  getChat ({
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
