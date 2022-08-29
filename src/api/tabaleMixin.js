import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      myUser: 'myUser',
      userInfo: 'userInfo',
      chatList: 'chatList'
    })
  }
}