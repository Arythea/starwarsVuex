<template>
  <img id="logo" alt="Vue logo" src="@/assets/logo.png">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/starships">Starships</router-link>
  </nav>
  <div id="top-bar">
    <router-link to="/login">LOG IN</router-link> | 
    <router-link to="/register">SIGN UP</router-link>
  </div>
  <router-view/>
</template>

<style>
body {
  background: black;
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
  color: #2c3e50;
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

nav {
  padding: 12px;
  margin-top: 20px;
  color: #ddd;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}

nav a {
  font-weight: bold;
  padding: 12px 20px;
  border-left: 1px solid #666;
}
nav a:last-child {
  border-right: 1px solid #666;
}

#top-bar {
  position: absolute;
  top: 40px;
  right: 30px;
}
</style>
