import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      socket: 'socket',
      myUser: 'myUser',
      otherUserInfo: 'otherUserInfo',
      userList: 'userList',
      chatList: 'chatList'
    })
  }
}
