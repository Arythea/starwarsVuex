<template>
  <div class="about">
    <h1>Starships</h1>
    <ul>
      <li v-for="(item,index) in starships" :key="index">
        <div class="card">
          <b><a :href="`/ship/${item.id}`">{{ item.name }}</a></b><br>
          {{ item.model }} <br>
          <img class="starshipImage" :src="`https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`" :alt="item.name" :onerror="`this.onerror=null; this.src='${placeholder}'`">
        </div>
      </li>
    </ul>
    <button v-if="!finish" @click="getAPIstarships()">VIEW MORE</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(['starships', 'nextPage', 'finish', 'placeholder'])
  },
  methods: {
    ...mapActions(['getAPIstarships'])
  },
  mounted() {
    this.$store.dispatch('getAPIstarships');
  }
}
</script>

<style scoped>
  ul, li{
    margin: 20px auto;
    list-style: none;
  }
  .starshipImage {
    height: 100px;
  }
</style>