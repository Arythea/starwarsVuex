<template>
  <div>
    <h1>Starship</h1>
    <div v-if="currentStarship">
      <h2>{{ currentStarship.name }}</h2>
      <p><pre>{{ currentStarship }}</pre></p>
      <div v-if="reduced!=true" class="red">
        <PilotComp v-for="(pilot, index) in currentStarship.pilots" :key="index" :url="pilot" :number="index" />
      </div>
      <FilmComp v-for="(film, index) in currentStarship.films" :key="index" :url="film" :number="index"  :reduced="false"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PilotComp from "@/components/PilotComp.vue";
import FilmComp from "@/components/FilmComp.vue";

export default {
  name: 'ShipComp',
  components: {
    PilotComp,
    FilmComp
  },
  props: ['reduced'],
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