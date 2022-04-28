<template>
  <div>
    <h1>Starship</h1>
    <div v-if="currentStarship">
      <h2>{{ currentStarship.name }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ShipMini',
  computed: {
    ...mapGetters({
      currentStarship: 'getCurrentStarship'
    })
  },
  unmounted() {
    this.currentStarship = null;
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
  .red {
    color: red;
  }
</style>