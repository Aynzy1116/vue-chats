<template>
  <div class="tagBox">
    <div class="tag">
      <div class="top">
        <div @click="changHref(0)">
          <img
            class="tag-icon"
            :class="[$route.path === '/user/Home' ? 'active' : 'nav']"
            src="@/assets/a.jpg"
          />
        </div>
        <div @click="changHref(1)">
          <img
            class="tag-icon"
            :class="[$route.path === '/user/Chat' ? 'active' : 'nav']"
            src="@/assets/icon/communication.png"
          />
        </div>
        <div @click="changHref(2)">
          <img
            class="tag-icon"
            :class="[$route.path === '/user/Address' ? 'active' : 'nav']"
            src="@/assets/icon/people-plus-one.png"
          />
        </div>
      </div>
      <div class="bot">
        <div @click="logout">退出</div>
      </div>
    </div>
    <div class="tagNav">
      <router-view />
    </div>
    <div class="content">
      <chat-content></chat-content>
    </div>
  </div>
</template>

<script>
import chatContent from '@/components/chatContent'
export default {
  components: {
    chatContent
  },
  methods: {
    changHref (type) {
      if (type === 0) {
        // this.$router.push({ path: '/user/Home' })
        console.log('123', this.$route.path)
      } else if (type === 1) {
        this.$router.push({ path: '/user/Chat' })
      } else if (type === 2) {
        this.$router.push({ path: '/user/Address' })
      }
      // console.log(this.$route)
    },
    logout () {
      console.log('退出')
    }
  }
}
</script>

<style lang="scss" scoped>
.tagBox {
  display: flex;
  flex: 1;
  height: calc(100vh - 16px);
  .tag {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60px;
    background-color: #f1eff1;
    border-right: 1px solid #f1eff1;
    box-shadow: 10px 10px 15px 40px #eeb9b9;
    .top,
    .bot {
      div {
        padding: 8px;
        cursor: pointer;
        .tag-icon {
          &:hover {
            background-color: #d3d2d4;
            color: #ffffff;
          }
        }
      }
    }
  }
  .tagNav {
    width: 300px;
    background-color: #ffffff;
  }
  .content {
    flex: 1;
    height: 100%;
    background-color: #f8f8f8;
  }
}
.nav {
  background-color: #f1eff1;
  color: black;
}

.active {
  background-color: #d3d2d4;
  color: #ffffff;
}
</style>
