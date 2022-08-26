<template>
  <div class="leftBar">
    <div class="search">
      <input placeholder="搜索" />
      <div>
        <img class="search-icon" src="@/assets/icon/search.png" />
      </div>
    </div>
    <div class="content">
      <div v-for="item in users" :key="item.userid">
        <div class="flex" @click="checkedUser(item.userid)">
          <div class="img"><img class="user-icon" src="../../assets/a.jpg" /></div>
          <div style="flex:1">
            <div class="name-time">
              <div>{{item.name}}</div>
              <div>16:05</div>
            </div>
            <div class="new-message">{{item.message}}</div>
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
        userid: 1,
        message: '在干啥'
      }, {
        name: 'Aynzy',
        userid: 2,
        message: '我累了'
      }]
    }
  },
  methods: {
    checkedUser (id) {
      this.$store.dispatch('chat/getUserId', id).then(res => {
        console.log('userId', this.userId)
      })
      // console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.leftBar {
  .search {
    position: relative;
    padding: 10px 0;
    input {
      width: 88%;
      padding: 8px;
      border-radius: 5px;
      border: none;
      background-color: #e2e2e2;
      text-indent: 2em;
      // &:after {}
    }
    div{
      position: absolute;
      top: 16px;
      left: 20px;
      .search-icon{
        width: 19px;
        height: 19px;
      }
    }
  }
  .content{
    background-color: #ffffff;
    div{
      .flex{
        align-items: center;
        padding: 10px;
        &:hover{
          background-color: #ecebec;
        }
        .img{
          margin-right: 10px;
        }
        div{
          .name-time{
            display: flex;
            justify-content: space-between;
          }
          .new-message{
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
