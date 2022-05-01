<template>
  <div>
      <div v-if="pilot">
        <div class="card">
            <div class="card-title">{{ pilot.name }}</div>
            <div class="card-data">{{ pilot.gender }}</div>
            <div class="card-data">{{ pilot.height }}m. height</div>
            <div class="card-data">{{ pilot.mass }}kg.</div>
            <div class="card-data">{{ pilot.hair_color }} hair</div>
            <div class="card-data">{{ pilot.eye_color }} eyes</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'PilotComp',
  props: ['url','number'],
  computed: {
    ...mapGetters({pilotByNumber: 'getPilotByNumber'}),
    pilot() {
        return this.pilotByNumber(this.number);
    }
  },
  created() {
    let url = this.url;
    let number = this.number;
    this.$store.dispatch('getAPIpilots', {url, number});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        background: #333;
        border-radius: 5px;
        padding: 15px;
        width: 90%;
        text-align: center;
        margin-top: 20px;
    }
    .card-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .card-data {
        background: #666;
        border-radius: 5px;
        padding: 2px 5px;
        width: auto;
        display: inline-block;
        margin-left: 5px;
        margin-top: 10px;
    }
</style>
