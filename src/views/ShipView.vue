<template>
  <div>
    <div v-if="currentStarship" class="ship">
      <img class="starshipImage" :src=" currentStarship.id !== '' ? `https://starwars-visualguide.com/assets/img/starships/${currentStarship.id}.jpg` : ''" :alt="currentStarship.name" :onerror="`this.onerror=null; this.src='${placeholderImg}'`">
      <div class="ship-content">
        <h1>{{ currentStarship.name }}</h1>
        <hr>
        <h6>{{ currentStarship.model }}</h6>
        <table>
          <tr>
            <th>Starship class:</th>
            <td>{{ currentStarship.starship_class }}</td>
          </tr>
          <tr>
            <th>Manufacturer:</th>
            <td>{{ currentStarship.manufacturer }}</td>
          </tr>
          <tr>
            <th>Cost:</th>
            <td>{{ new Intl.NumberFormat('es-ES').format(currentStarship.cost_in_credits) }} credits</td>
          </tr>
          <tr>
            <th>Length:</th>
            <td>{{ new Intl.NumberFormat('es-ES').format(currentStarship.length) }} m.</td>
          </tr>
          <tr>
            <th>Speed:</th>
            <td>{{ currentStarship.max_atmosphering_speed}} m/s</td>
          </tr>
          <tr>
            <th>Crew:</th>
            <td>{{ currentStarship.crew }} people</td>
          </tr>
          <tr>
            <th>Passengers:</th>
            <td>{{ currentStarship.passengers }} people/animals</td>
          </tr>
          <tr>
            <th>Cargo capacity:</th>
            <td>{{ currentStarship.cargo_capacity }} kg.</td>
          </tr>
          <tr>
            <th>Consumables:</th>
            <td>{{ currentStarship.consumables }} people/animals</td>
          </tr>
          <tr>
            <th>Hyperdrive rating:</th>
            <td>{{ currentStarship.hyperdrive_rating }} </td>
          </tr>
          <tr>
            <th>MGLT:</th>
            <td>{{ currentStarship.MGLT }}</td>
          </tr>
        </table>
        <hr>
        <h2>Plilots:</h2>
        <PilotComp v-for="(pilot, index) in currentStarship.pilots" :key="index" :url="pilot" :number="index" />
        <hr>
        <h2>Films:</h2>
        <FilmComp class="film" v-for="(film, index) in currentStarship.films" :key="index" :url="film" :number="index"  :reduced="false"/>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PilotComp from "@/components/PilotComp.vue";
import FilmComp from "@/components/FilmComp.vue";

export default {
  components: {
    PilotComp,
    FilmComp
  },
  computed: {
    ...mapGetters({
      currentStarship: 'getCurrentStarship',
      placeholderImg: 'getPlaceholderImg'
    })
  },
  created() {
    this.$store.dispatch('getAPIstarshipById', this.$route.params.id);
  }
}
</script>

<style scoped>
  .ship {
     display: flex;
     flex-wrap: wrap;
     width: 90%;
     max-width: 1200px;
     margin: 0 auto;
     align-items: flex-start;
     margin-top: 40px;
  }
  .ship img {
    width: 45%;
    border-top-left-radius: 10px;
    margin-right: 10px;
  }
  .ship-content {
    width: 45%;
    text-align: left;
    padding-left: 30px;
    padding-bottom: 50px;
    background: #191919;
    border-top-right-radius: 10px;
    margin-left: 20px;
    border-left: 2px solid rgb(204, 73, 73);
  }
  h1 {
    margin-bottom: -10px;
    padding-bottom: 0px;
  }
  h6 {
    margin-top: 0;
    font-size: 12px;
    font-style: italic;
    font-weight: normal;
  }
  table {
    width: 95%;
  }
  td, th {
    padding: 5px;
    vertical-align: top;
    background: #444;
  }
  h2 {
    margin-top: 40px; 
  }
  .film {
    display: inline-block;
  }
  @media screen and (max-width: 600px) {
    .ship img {
      width: 90%;
    }
    .ship-content {
      width: 98%;
      margin-left: 0;
      padding-left: 10px;
    }
  }
</style>
