<template>
  <div id="top-bar" v-if="!loggedin">
    <router-link to="/login">LOG IN</router-link> <span class="separator"> | </span>
    <router-link to="/register">SIGN UP</router-link>
  </div>
  <div v-else id="top-bar">
    <router-link to="/login" class="user-image"><img src="@/assets/user.png"></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: 'TopBar',
  computed: {
    ...mapGetters({loggedin: 'getLoggedin'})
  }
}
</script>


<style scoped>
#top-bar {
  position: absolute;
  top: 40px;
  right: 30px;
}
img {
  width: 40px;
}
a.user-image {
  text-decoration: none;
  border-bottom: none;
}

@media screen and (max-width: 600px) {
  #top-bar {
    top: 15px;
    right: 10px;
  }
  #top-bar .separator {
    display: none;
  }
  #top-bar a {
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
  }
}
</style>
