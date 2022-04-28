<template>
  <div class="hello">
    <h1>Film</h1>
    <pre v-if="films[number]">
        {{ films[number].title  }}
        <div v-if="reduced!=true">
            {{ films[number] }}
        </div>
    </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'FilmComp',
  props: ['url','number','reduced'],
  computed: {
    ...mapGetters({films: 'getFilms'})
  },
  created() {
    let url = this.url;
    let number = this.number;
    this.$store.dispatch('getAPIfilm', {url, number});
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
</style>
