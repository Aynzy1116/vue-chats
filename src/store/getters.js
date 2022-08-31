const getters = {
  socket: state => state.chat.socket,
  myUser: state => state.chat.myUser,
  otherUserInfo: state => state.chat.otherUserInfo,
  chatList: state => state.chat.chatList
}

export default getters
