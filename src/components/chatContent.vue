<template>
  <div class="box">
    <div class="header">
      {{ userInfo.name }}
    </div>
    <div class="chat-content">
      <div v-for="(item, i) in chatList[userInfo.userId]" :key="i">
        <div :class="[item.MyId == userInfo.userId ? 'left' : 'right']">
          {{ item.msg }}
        </div>
      </div>
    </div>
    <div class="footer">
      <div contenteditable="true" ref="message"></div>
      <div>
        <div @click="send">发送</div>
      </div>
    </div>
  </div>
</template>

<script>
import socket from '@/util/socket.js'

export default {
  data () {
    return {
    }
  },
  methods: {
    send () {
      const item = {
        MyName: this.myUser.name,
        MyId: this.myUser.userId,
        receiveName: this.userInfo.name,
        receiveId: this.userInfo.userId,
        msg: this.$refs.message.innerText,
        time: new Date().getTime()
      }
      if (Object.keys(this.userInfo).length === 0) {
        return
      }
      socket.emit('message', item)
      this.$refs.message.innerText = null
      this.$refs.message.focus()
      console.log(this.chatList[this.userInfo.userId])
    }
  }

}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  height: 32px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 32px;
  text-align: left;
}
.chat-content {
  flex: 1;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}
.footer {
  height: 140px;
  text-align: left;
  > div:first-child {
    width: 100%;
    height: 75%;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
    outline: none;
    user-select: text;
    word-break: break-all;
    white-space: pre-wrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  div:nth-child(2) {
    position: relative;
    height: 25%;
    width: 100%;
    div {
      position: absolute;
      right: 10px;
      bottom: 10px;
      cursor: pointer;
      width: 30px;
      padding: 4px 6px;
      background-color: #d7cddb;
    }
  }
}
.left {
  text-align: left;
}
.right {
  padding: 10px;
  text-align: right;
}
</style>
