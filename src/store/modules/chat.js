import Vue from 'vue'

const state = {
  myUser: {
    name: 'lz',
    userId: 857
  }, // 自己的信息
  otherUserInfo: {}, // 当前聊天用户信息
  chatList: {} // 聊天的消息
}

const mutations = {
  SET_CHATLIST: (state, info) => {
    if (state.chatList[state.otherUserInfo.userId] === undefined) {
      Vue.set(state.chatList, state.otherUserInfo.userId, []) // 使用Vue.set 不然监听不到
    }
    info.msg = info.msg.trim()
    console.log('info', info)
    state.chatList[state.otherUserInfo.userId].push(info)
    // console.log('chatList', state.chatList[state.otherUserInfo.userId])
    // console.log('chatList', state.chatList)
  },
  SET_USERINFO: (state, info) => {
    state.otherUserInfo = info
  }
}
const actions = {
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
