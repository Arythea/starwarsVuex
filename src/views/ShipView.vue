<template>
  <div>
    <h1>Starship</h1>
    <div v-if="currentStarship">
      <img class="starshipImage" :src=" currentStarship.id !== '' ? `https://starwars-visualguide.com/assets/img/starships/${currentStarship.id}.jpg` : ''" :alt="currentStarship.name" :onerror="`this.onerror=null; this.src='${placeholder}'`">
      <div class="price">{{ currentStarship.cost_in_credits }} credits</div>
      <h2>{{ currentStarship.name }}</h2>
      <p>{{ currentStarship }}</p>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['currentStarship', 'placeholder'])
  },
  created() {
    this.$store.dispatch('getAPIstarshipById', this.$route.params.id);
  }
}
</script>

<style scoped>
  ul, li {
    margin: 20px auto;
    list-style: none;
  }
  .price {
    margin-top: -45px;
    color: white;
    text-shadow: 1px 1px black;
    font-weight: bold;
    font-size: 30px;
  }
</style>