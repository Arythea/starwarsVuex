import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
    nextPage: 1,
    currentStarship: null,
    finish: false,
    loggedin: false,
    pilots: [],
    films: []
  },
  getters: {
    getStarships(state) {
      return state.starships;
    },
    getNextPage(state) {
      return state.nextPage;
    },
    getCurrentStarship(state) {
      return state.currentStarship;
    },
    getFinish(state) {
      return state.finish;
    },
    getLoggedin(state) {
      return state.loggedin;
    },
    getPilots(state) {
      return state.pilots;
    },
    getFilms(state) {
      return state.films;
    }
  },
  mutations: {
    setStarships(state, data) {
      state.starships.push(...data);
      if(data.length >= 10){
        state.nextPage++;
      } else {
        state.finish = true;
      }
    },
    setCurrentStarship(state, data) {
      state.currentStarship = data;
    },
    setLoggedin(state, value) {
      state.loggedin = value;
    },
    pushCurrentArrayPilots(state, {pilot, number}) {
      state.pilots[number] = pilot;
    },
    pushCurrentArrayFilms(state, {film, number}) {
      state.films[number] = film;
    }
  },
  actions: {
    async getAPIstarships( context ) {
      let APIdata = await axios.get(`https://swapi.dev/api/starships/?page=${context.state.nextPage}`);
      let arrayStarships = APIdata.data.results.map( x => {
        let segments = x.url.split('/');
        let id = segments[segments.length - 2];
        return {...x, id};
      })
      context.commit('setStarships', arrayStarships)
    },
    async getAPIstarshipById( context, id ) {
      let APIdata = await axios.get(`https://swapi.dev/api/starships/${id}/`);
      context.commit('setCurrentStarship', APIdata.data);
    },
    async getAPIpilot( context, {url, number} ){
      let APIdata = await axios.get(url);
      let pilot = APIdata.data;
      context.commit('pushCurrentArrayPilots', {pilot, number});
    },
    async getAPIfilm( context, {url, number} ){
      let APIdata = await axios.get(url);
      let film = APIdata.data;
      context.commit('pushCurrentArrayFilms', {film, number});
    }
  },
  modules: {
  }
})
