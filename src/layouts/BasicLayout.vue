<template>
  <div class="tagBox">
    <div class="tag">
      <div @click="changHref(0)">
        <img
          class="tag-icon"
          :class="[$route.path === '/Home' ? 'active' : 'nav']"
          src="@/assets/a.jpg"
        />
      </div>
      <div @click="changHref(1)">
        <img
          class="tag-icon"
          :class="[$route.path === '/Chat' ? 'active' : 'nav']"
          src="@/assets/icon/communication.png"
        />
      </div>
      <div @click="changHref(2)">
        <img
          class="tag-icon"
          :class="[$route.path === '/Address' ? 'active' : 'nav']"
          src="@/assets/icon/people-plus-one.png"
        />
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
        this.$router.push({ path: '/Home' })
      } else if (type === 1) {
        this.$router.push({ path: '/Chat' })
      } else if (type === 2) {
        this.$router.push({ path: '/Address' })
      }
      // console.log(this.$route)
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
    width: 60px;
    background-color: #f1eff1;
    border-right: 1px solid #f1eff1;
    box-shadow: 10px 10px 15px 40px #eeb9b9;
    div {
      padding: 8px;
      .tag-icon {
        &:hover {
          background-color: #d3d2d4;
          color: #ffffff;
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
