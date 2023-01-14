<template>
  <div class="box">
    <div class="header">
      {{ otherUserInfo.name }}
    </div>
    <div class="chat-content">
      <div v-for="(item, i) in currentChatMessage" :key="item.id">
        <div :class="[item.from_name == otherUserInfo.name ? 'left' : 'right']">
          <div v-if="item.from_name == otherUserInfo.name"><img class="chat-icon" src="../assets/b.jpg" alt="" /></div>
          <div class="chat" :class="[item.from_name == otherUserInfo.name ? 'chatleft' : 'chatright']">
            <div :class="[
                item.from_name == otherUserInfo.name
                  ? 'triangle-left'
                  : 'triangle-right',
              ]"></div>
            <div :class="[
                item.from_name == otherUserInfo.name ? 'fill-left' : 'fill-right',
              ]"></div>
            {{ item.message }}
          </div>
          <div v-if="item.from_name != otherUserInfo.name"><img class="chat-icon" src="../assets/a.jpg" alt="" /></div>
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
  import store from '../store'
  export default {
    data () {
      return {
        userInfo: JSON.parse(localStorage.getItem('userInfo')),
        currentChatMessage: []
      }
    },
    created () {
      console.log(this.userInfo)
      this.socket.emit('login', this.userInfo)
    },
    watch: {
      otherUserInfo (a, b) {
        console.log('aaa', a);
        console.log('allChatList', this.allChatList);
        if (this.allChatList.has(a.id)) {
          this.currentChatMessage = this.allChatList.get(a.id)
          console.log('currentChatMessage', this.currentChatMessage);
        }
      }
    },
    methods: {
      send () {
        console.log('userInfo', this.userInfo)
        console.log('otherUserInfo', this.otherUserInfo)
        const item = {
          from_id: this.userInfo.id,
          from_name: this.userInfo.name,
          to_id: this.otherUserInfo.id,
          to_name: this.otherUserInfo.name,
          message: this.$refs.message.innerText,
          createTime: this.$moment().format()
        }
        if (Object.keys(this.otherUserInfo).length === 0) {
          return
        }
        console.log(item)
        this.currentChatMessage.push(item)
        // store.dispatch('chat/setChatList', item)
        this.socket.emit('message', item)
        this.$refs.message.innerText = null
        this.$refs.message.focus()
        // console.log('otherUserInfo', this.otherUserInfo)
        // console.log('chatList', this.chatList)
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
    height: 30px;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 30px;
    text-align: left;
  }

  .chat-content {
    flex: 1;
    overflow-y: auto;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }

  .footer {
    height: 140px;
    text-align: left;

    >div:first-child {
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
        width: 40px;
        padding: 4px 6px;
        text-align: center;
        background-color: #d7cddb;
        cursor: pointer;
      }
    }
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    white-space: pre;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    white-space: pre;
  }

  /* 聊天气泡 */
  .chat {
    position: relative;
    max-width: 260px;
    padding: 10px;
    margin-top: 10px;
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

  .chatleft {
    display: flex;
    justify-content: flex-start;
  }

  .chatright {
    display: flex;
    justify-content: flex-end;
    margin-left: 50px;
  }
</style>