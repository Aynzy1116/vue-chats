<template>
  <div class="box">
    <div class="header">
      {{ userInfo.name }}
    </div>
    <div class="chat-content">
      <div v-for="(item, i) in chatList[userInfo.userId]" :key="i">
        <div :class="[item.MyId == userInfo.userId ? 'left' : 'right']">
          <div class="chat">
            <div :class="[item.MyId == userInfo.userId ? 'triangle-left' : 'triangle-right']"></div>
            <div :class="[item.MyId == userInfo.userId ? 'fill-left' : 'fill-right']"></div>
            {{ item.msg }}</div>
          <div><img class="tag-icon" src="../assets/a.jpg" alt=""></div>
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  white-space:pre;
}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  white-space:pre;
}
.chat {
  position: relative;
  max-width: 260px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 50px;
  border-radius: 8px;
  word-break: break-all;
  background-color: skyblue;
  white-space: pre-wrap;
  color: #fff;
  .triangle-left,
  .triangle-right {
      position: absolute;
      top: 2px;
      border-width: 6px;
      border-style: solid;
  }
  .triangle-left {
    left: -10px;
    border-color: transparent skyblue transparent transparent;
  }
  .triangle-right {
    right: -10px;
    border-color: transparent transparent transparent skyblue;
  }
  .fill-left,
  .fill-right {
      position: absolute;
      top: 2px;
      border-width: 6px;
      border-style: solid;
  }
  .fill-left {
      left: -10px;
      border-color: transparent skyblue transparent transparent;
  }
  .fill-right {
      right: -10px;
      border-color: transparent transparent transparent skyblue;
  }
}
</style>
