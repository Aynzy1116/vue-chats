import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://localhost:3010')
// const socket = io('/')
// 接收聊天消息
socket.on('message', (data) => {
  console.log(data)
  store.dispatch('chat/getChat', data)
})

export default socket
