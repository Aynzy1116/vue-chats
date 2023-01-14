<template>
  <div class="leftBar">
    <div class="search">
      <input placeholder="搜索" />
      <div>
        <img class="search-icon" src="../assets/icon/search.png" />
      </div>
    </div>
    <div class="content">
      <div v-for="item in friends" :key="item.id">
        <div class="flex" :class="[item.id === otherUserInfo.id ? 'active' : 'nav']" @click="checkedUser(item)">
          <div class="img">
            <img class="user-icon" src="../assets/a.jpg" />
          </div>
          <div style="flex: 1">
            <div class="name-time">
              <div>{{ item.name }}</div>
              <div style="font-size: 14px;">{{ msg(item,1) }}</div>
            </div>
            <div class="new-message">{{ msg(item,2) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getFriends } from '@/api/user.js'
  export default {
    data () {
      return {
        friends: []
      }
    },
    computed: {
      msg () {
        return (item, type) => {
          // console.log('item', item);
          if (item.messages.length == 0) {
            return null
          } else {
            if (type == 1) {
              return this.$moment(item.messages[item.messages.length - 1].createTime).format('YYYY-MM-DD LTS')
            }
            else return item.messages[item.messages.length - 1].message

          }
          // if (this.chatList[id] !== undefined) {
          //   return this.chatList[id][this.chatList[id].length - 1].msg
          // }
          // return null
        }
      }

    },
    created () {
      if (Object.keys(this.myUser).length == 0) {
        alert('请先登入!')
        this.$router.push('/login')
        return
      }
      getFriends({
        id: this.myUser.id
      }).then(res => {
        this.friends = res.result
        console.log('this.friends', this.friends);
        // 转化为Map()存储
        let map = new Map()
        res.result.forEach(x => {
          map.set(x.id, x.messages)
        })
        this.$store.commit('chat/setAllChatList', map)
      })
    },
    methods: {
      checkedUser (otherUserInfo) {
        console.log('otherUserInfo', otherUserInfo);
        this.$store.dispatch('chat/setOtherUserInfo', otherUserInfo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .leftBar {
    .search {
      box-sizing: border-box;
      position: relative;
      padding: 8px 0;
      border-bottom: 1px solid black;

      input {
        width: 88%;
        height: 18px;
        padding: 8px;
        border-radius: 5px;
        border: none;
        background-color: #e2e2e2;
        text-indent: 2em;
        // &:after {}
      }

      div {
        position: absolute;
        top: 14px;
        left: 20px;

        .search-icon {
          width: 20px;
          height: 20px;
        }
      }
    }

    .content {
      background-color: #ffffff;

      div {
        .flex {
          align-items: center;
          padding: 10px;

          &:hover {
            background-color: #ecebec;
          }

          .img {
            margin-right: 10px;
          }

          div {
            .name-time {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .new-message {
              text-align: left;
              color: #ab8eed;
            }
          }
        }
      }
    }
  }

  .active {
    background-color: #ecebec;
  }

  .nav {
    background-color: #ffffff;
  }
</style>