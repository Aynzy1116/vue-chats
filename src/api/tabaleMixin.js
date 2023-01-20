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
      allChatList: 'allChatList',  // 所有的聊天信息Map()
    })
  }
}
