import io from 'socket.io-client'
import store from '../store'

const my = JSON.parse(localStorage.getItem('userInfo'))
export default function (that) {
  console.log('that', that)
  const socket = io.connect('http://localhost:3030')
  // const socket = io.connect('http://192.168.0.107:3010')
  that.$store.commit('chat/setSocket', socket) // 登入时保存socket到store

  // 接收聊天消息
  socket.on('message', (data) => {
    console.log('data', data)
    that.$store.commit('chat/topUser', data.from_id) // 将收到消息的用户置顶
    store.commit('chat/setChatList', data) // 添加聊天消息
  })

  socket.on('userList', user => {
    console.log(user.username + '登录了')
  })

  socket.on('logout', res => {
    console.log(res + '退出连接')
  })

  socket.on('disconnect', reason => {
    console.log('断开', reason)
    // 'io server disconnect' 服务器已使用socket.disconnect()强制断开套接字
    // io client disconnect 使用socket.disconnect()手动断开套接字
    // transport close连接已关闭（例如：用户失去连接，或网络从 WiFi 更改为 4G）
    // transport error 连接遇到错误（例如：服务器在 HTTP 长轮询周期中被杀死）
    // ping timeout 服务器未在该pingInterval + pingTimeout范围内发送 PING
    if (reason === 'io server disconnect' || reason === 'transport close' || reason === 'transport error') {
      socket.connect()
    } else if (reason === 'io client disconnect') {
      console.log('手动断开连接')
    }
  })

  socket.on('connect', reason => {
    console.log('连接成功', reason)
  })
}
