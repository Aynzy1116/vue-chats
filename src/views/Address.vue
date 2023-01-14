<template>
  <div>
    <div>请输入好友的名称</div>
    <div class="search">
      <input placeholder="搜索" v-model.trim='userName' />
      <div>
        <img class="search-icon" src="../assets/icon/search.png" />
      </div>
    </div>
    <div style="display: flex;justify-content: center;">
      <div class="btAdd" @click="addFriend">添加</div>
    </div>
  </div>
</template>

<script>
  import { addFriends } from '@/api/user.js'
  export default {
    data () {
      return {
        lists: [],
        userName: '',
      }
    },
    created () {
    },

    methods: {
      addFriend () {
        if (!this.userName) {
          alert('请输入好友名称')
          return
        }
        if (this.userName == this.myUser.name) {
          alert('添加失败,不能添加自己为好友')
          return
        }
        addFriends({
          userName: this.userName,
          myId: this.myUser.id
        }).then(res => {
          console.log('res', res);
          alert(res.message)
        })
      }
    }

  }
</script>

<style scoped lang="scss">
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

  .btAdd {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 40px;
    background-color: #cddbe1;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background-color: skyblue;
      color: white;
    }
  }
</style>