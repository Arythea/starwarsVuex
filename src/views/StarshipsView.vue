<template>
  <div class="about">
    <h1>Starships</h1>
    <ul>
      <li v-for="(item,index) in starships" :key="index">
        <b><a :href="`/ship/${item.id}`">{{ item.name }}</a></b><br>
        {{ item.model }}
      </li>
    </ul>
    <button v-if="!finish" @click="getAPIstarships()">VIEW MORE</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(['starships', 'nextPage', 'finish'])
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
</style>