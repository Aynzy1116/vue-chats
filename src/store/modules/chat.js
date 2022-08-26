const state = {
  userId: null
}

const mutations = {
  SET_USERID: (state, info) => {
    state.userId = info
  }
}
const actions = {
  getUserId ({
    commit
  }, id) {
    return new Promise((resolve, reject) => {
      if (id) {
        commit('SET_USERID', id)
        resolve(id)
      }
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
