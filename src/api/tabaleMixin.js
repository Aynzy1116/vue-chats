import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  }
}
