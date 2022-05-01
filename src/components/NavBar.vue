<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/starships">Starships</router-link>
  </div>
</template>

<style scoped>
div {
  padding: 12px;
  margin-top: 20px;
  color: #ddd;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}

div a {
  font-weight: bold;
  padding: 12px 20px;
  border-left: 1px solid #666;
}
div a:last-child {
  border-right: 1px solid #666;
}
</style>
