<template>
  <div class="home">
    <img alt="Vue logo" :src="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      logo: require('../assets/logo.png')
    }
  }
}
</script>
