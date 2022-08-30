import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      myUser: 'myUser',
      otherUserInfo: 'otherUserInfo',
      chatList: 'chatList'
    })
  }
}
