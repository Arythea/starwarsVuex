<template>
  <div>
    <h1>Pilot</h1>
    <hr>
    <pre v-if="pilots[number]">
        {{ pilots[number] }}
        <h2>PELIS</h2>
        <FilmComp v-for="(film, index) in pilots[number].films" :key="index" :url="film" :number="index" :reduced="true"/>
        <h2>Naus</h2>
        <ShipMini v-for="(ship, index) in pilots[number].starships" :key="index" :url="ship" :number="index" />
    </pre>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilmComp from "@/components/FilmComp.vue";
import ShipMini from "@/components/ShipMini.vue";

export default {
  name: 'PilotComp',
  props: ['url','number'],
  components: {
      FilmComp,
      ShipMini
  },
  computed: {
    ...mapGetters({pilots: 'getPilots'})
  },
  created() {
    let url = this.url;
    let number = this.number;
    this.$store.dispatch('getAPIpilot', {url, number});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  margin-top: 30px;
}
</style>
