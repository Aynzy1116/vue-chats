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
          <div style="width: 240px">
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
              let dataTime = this.$commonHelper.desriptDateTime(item.messages[item.messages.length - 1].createTime)
              return dataTime.substring(1, dataTime.length - 1)
            }
            else return item.messages[item.messages.length - 1].message
          }
        }
      }
    },
    watch: {
      allChatList (a, b) {
        this.friends = this.$commonHelper.changeMap(a)
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
        this.$store.commit('chat/setAllChatList', this.$commonHelper.changeArray(res.result))
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
    width: 100%;

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
      width: 100%;
      background-color: #ffffff;

      div {

        .flex {
          box-sizing: border-box;
          display: flex;
          width: 100%;
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
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .new-message {
              width: 100%;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
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