<template>
  <div class="home">我是主页{{ title }}</div>
</template>

<script>
import request from '@/util/request.js'
import io, { Socket } from 'socket.io-client'
export default {
  name: 'Home',
  data () {
    return {
      title: '主页'
    }
  },
  created () {
    // request({
    //   url: '/list',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    // })
    const socket = io.connect('http://localhost:3010')
    socket.emit('connection', data => {
      console.log(data)
    })
    socket.on('message', res => {
      console.log(res)
    })
  }
}
</script>
