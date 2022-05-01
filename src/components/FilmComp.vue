<template>
  <div>
    <div v-if="film">
      <div class="card">
          <div class="card-title">{{ `${film.title} (${film.release_date.substring(0,4)})`}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'FilmComp',
  props: ['url','number'],
  computed: {
    ...mapGetters({filmByNumber: 'getFilmByNumber'}),
    film() {
        return this.filmByNumber(this.number);
    }
  },
  created() {
    let url = this.url;
    let number = this.number;
    this.$store.dispatch('getAPIfilm', {url, number});
  }
}
</script>

<style scoped>
    .card {
        background: #666;
        border-radius: 5px;
        padding: 2px 5px;
        width: auto;
        margin-left: 5px;
        margin-top: 10px;
    }
</style>
