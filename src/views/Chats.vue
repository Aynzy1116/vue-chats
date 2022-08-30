<template>
  <div class="leftBar">
    <div class="search">
      <input placeholder="搜索" />
      <div>
        <img class="search-icon" src="../assets/icon/search.png" />
      </div>
    </div>
    <div class="content">
      <div v-for="item in users" :key="item.userId">
        <div
          class="flex"
          :class="[item.userId === otherUserInfo.userId ? 'active' : 'nav']"
          @click="checkedUser(item)"
        >
          <div class="img">
            <img class="user-icon" src="../assets/a.jpg" />
          </div>
          <div style="flex: 1">
            <div class="name-time">
              <div>{{ item.name }}</div>
              <div>16:05</div>
            </div>
            <div class="new-message">{{ item.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [{
        name: 'xiaodu',
        userId: 1,
        message: '在干啥'
      }, {
        name: 'Aynzy',
        userId: 2,
        message: '我累了'
      }]
    }
  },
  methods: {
    checkedUser (otherUserInfo) {
      this.$store.dispatch('chat/setOtherUserInfo', otherUserInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.leftBar {
  .search {
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid black;
    input {
      width: 88%;
      padding: 8px;
      border-radius: 5px;
      border: none;
      background-color: #e2e2e2;
      text-indent: 2em;
      // &:after {}
    }
    div {
      position: absolute;
      top: 16px;
      left: 20px;
      .search-icon {
        width: 19px;
        height: 19px;
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
          }
          .new-message {
            text-align: left;
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
