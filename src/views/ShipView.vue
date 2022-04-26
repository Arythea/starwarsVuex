<template>
  <div>
    <h1>Starship</h1>
    <h2 v-if="currentStarship">{{ currentStarship.name }}</h2>
    <p>{{ currentStarship }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['currentStarship'])
  },
  created() {
    this.$store.dispatch('getAPIstarshipById', this.$route.params.id);
  }
}
</script>

<style scoped>
  ul, li{
    margin: 20px auto;
    list-style: none;
  }
</style>