<template>
  <div class="tagBox">
    <div class="tag">
      <div
        :class="[$route.path === '/Home' ? 'active' : 'nav']"
        @click="changHref(0)"
      >
        个人
      </div>
      <div
        :class="[$route.path === '/Chat' ? 'active' : 'nav']"
        @click="changHref(1)"
      >
        聊天
      </div>
      <div
        :class="[$route.path === '/Address' ? 'active' : 'nav']"
        @click="changHref(2)"
      >
        通信录
      </div>
    </div>
    <div class="tagNav">
      <left-bar></left-bar>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import leftBar from '@/components/leftBar/leftBar'
export default {
  components: {
    leftBar
  },
  created () {
    console.log(this.$route.path)
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
      console.log(this.$route)
    }
  }
}
</script>

<style lang="scss" scoped>
.tagBox {
  display: flex;
  flex: 1;
  .tag {
    width: 150px;
    div {
      padding: 8px;
      &:hover{
        background-color: green;
        color: #ffffff;
      }
    }
  }
  .tagNav{
    width: 300px;
    background-color: #ffffff;
  }
  .content {
    flex: 1;
    background-color: green;
  }
}

.nav {
  background-color: #fff;
  color: black;
}

.active {
  background-color: green;
  color: #ffffff;
}
</style>
