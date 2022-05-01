<template>
  <div>
    <ul v-if="starships">
      <li v-for="(item,index) in starships" :key="index">
        <router-link :to="`/ship/${item.id}`" class="card">
          <img class="starshipImage" :src="`https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`" :alt="item.name" :onerror="`this.onerror=null; this.src='${placeholderImg}'`">
          <div class="card-text">
            <b class="name">{{ item.name }}</b>
            {{ item.model }}
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import infiniteScroll from 'vue-infinite-scroll'

export default {
  directives: {
    infiniteScroll
  },
  computed: {
    ...mapGetters({
      starships: 'getStarships', 
      nextPage: 'getNextPage', 
      finish: 'getFinish',
      placeholderImg: 'getPlaceholderImg'
    })
  },
  methods: {
    ...mapActions(['getAPIstarships']),
    setupInfiniteScroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && !this.finish) {
          this.getAPIstarships();
        }
      };
    }
  },
  mounted() {
    if(this.$store.state.nextPage == 1){
      this.$store.dispatch('getAPIstarships');
    }
    this.setupInfiniteScroll();
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    max-width: 900px;
  }
  ul, li{
    margin: 20px auto;
    list-style: none;
  }
  .starshipImage {
    height: 180px;
    display: block;
  }
  .starships {
    display: ;
  }
  .card {
    padding: 5px;
    display: block;
    opacity: 0.9;
  }
  .card:hover {
    opacity: 1;
  }
  .card .name {
    display: block;
  }
  .card img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid rgb(204, 73, 73);
  }
  .card-text {
    background: #222;
    padding: 10px 0;
  }
  @media screen and (max-width: 600px) {
    ul {
      margin: 0 auto;
      padding: 0;
    }
  }

</style>