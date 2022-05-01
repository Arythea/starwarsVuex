<template>
  <img id="logo" alt="Vue logo" src="@/assets/logo.png">
  <TopBar />
  <NavBar />
  <router-view/>
  <FooterComp />
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";
import TopBar from "@/components/TopBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    FooterComp,
    TopBar,
    NavBar
  }
}
</script>

<style>
body {
  background-color: black;
  color: white;
}

#logo {
  height: 100px;
  margin-top: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: #999;
  text-decoration: none;
}

a:hover {
  color: #ccc;
}

a.router-link-exact-active {
  color: #ccc;
  border-bottom: 2px solid #ccc;
}

@media screen and (max-width: 600px) {
  #logo {
    height: 80px;
  }
}
</style>
