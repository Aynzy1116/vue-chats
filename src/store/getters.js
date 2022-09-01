const getters = {
  socket: state => state.chat.socket,
  myUser: state => state.chat.myUser,
  otherUserInfo: state => state.chat.otherUserInfo,
  userList: state => state.chat.userList,
  chatList: state => state.chat.chatList
}

export default getters
