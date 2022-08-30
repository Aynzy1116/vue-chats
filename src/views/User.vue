<template>
  <div class="main" @keyup="enter">
    <div>欢迎来到小小度的聊天屋</div>
    <div v-if="type === 1">
      <div>
        <span>账户密码登录</span>
      </div>
      <div>
        <img class="login-icon" src="../assets/icon/user.png" alt="" />
        <input
          class="username"
          v-model="user.username"
          type="text"
          placeholder="请输入用户名"
        />
      </div>
      <div>
        <img class="login-icon" src="../assets/icon/protect.png" alt="" />
        <input
          class="password"
          v-model="user.password"
          type="text"
          placeholder="请输入密码"
        />
      </div>
    </div>
    <div v-if="type === 2">
      <div>
        <span>注册账户</span>
      </div>
      <div>
        <img class="login-icon" src="../assets/icon/user.png" alt="" />
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div>
        <img class="login-icon" src="../assets/icon/protect.png" alt="" />
        <input type="text" placeholder="请输入密码" />
      </div>
      <div>
        <img class="login-icon" src="../assets/icon/protect.png" alt="" />
        <input type="text" placeholder="再次输入密码" />
      </div>
    </div>
    <div>
      <div>
        <div><input type="checkbox" id="cbox1" /></div>
        <label for="cbox1">记住密码</label>
      </div>
      <div v-if="type === 1">
        没有账号?
        <span @click="changeType(2)">点击注册</span>
      </div>
      <div v-if="type === 2">
        已有账号?
        <span @click="changeType(1)">回到登录</span>
      </div>
    </div>
    <div @click="login" class="login">登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 1,
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    login () {
      console.log('login', this.user)
      localStorage.setItem('userInfo', JSON.stringify(this.user))
      this.$router.push('/user')
    },
    changeType (value) {
      this.type = value
    },
    enter (e) {
      if (e.keyCode === 13) {
        this.login()
      }
      console.log(e.target._value)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin-top: 100px;
    font-size: 38px;
    font-weight: 700;
  }
  > div:nth-child(2) {
    margin: 15px 0;
    > div {
      position: relative;
      width: 370px;
      height: 36px;
      text-align: center;
      margin: 20px;
      span {
        display: inline-block;
        padding: 10px;
        margin-bottom: 20px;
        border-bottom: 2px solid #986cff;
        color: #986cff;
        &:hover {
          cursor: pointer;
          color: #6caeec;
          border-bottom: 2px solid #6caeec;
        }
      }
    }
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    width: 370px;
    margin-bottom: 25px;
    margin-top: -5px;
    > div {
      font-size: 14px;
      color: black;
      cursor: pointer;
    }
    > div:nth-child(1) {
      display: flex;
    }
    > div:nth-child(2) {
      > span {
        color: #1890ff;
        &:hover {
          color: #40a9ff;
        }
      }
    }
  }
}
.login-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 11px;
}
.login {
  height: 40px;
  line-height: 40px;
  width: 380px;
  color: white;
  background-color: #1890ff;
  cursor: pointer;
  &:hover {
    background-color: #40a9ff;
  }
}
input {
  width: 100%;
  height: 100%;
  text-indent: 3em;
}
#cbox1 {
  width: 14px;
  height: 14px;
}
</style>
