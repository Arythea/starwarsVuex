<template>
  <div class="about">
    <h1>Starships</h1>
    <ul>
      <li v-for="(item,index) in starships" :key="index">
        <b><router-link :to="`/ship/${item.id}`">{{ item.name }}</router-link></b><br>
        {{ item.model }}
      </li>
    </ul>
    <button v-if="!finish" @click="getAPIstarships()">VIEW MORE</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      starships: 'getStarships', 
      nextPage: 'getNextPage', 
      finish: 'getFinish'
    })
  },
  mounted() {
    if(this.$store.state.nextPage == 1){
      this.$store.dispatch('getAPIstarships');
    }
  }
}
</script>

<style scoped>
  ul, li{
    margin: 20px auto;
    list-style: none;
  }
</style>