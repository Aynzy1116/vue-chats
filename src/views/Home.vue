<template>
  <div class="home">
    我是主页{{ title }}
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      title: '主页'
    }
  }
}
</script>
