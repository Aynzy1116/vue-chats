const getters = {
  myUser: state => state.chat.myUser,
  otherUserInfo: state => state.chat.otherUserInfo,
  chatList: state => state.chat.chatList
}

export default getters
