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
    films: [],
    finish: false,
    placeholderImg: require('../assets/placeholder.jpg')
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
    getPilotByNumber: (state) => (number) => {
      if (state.pilots[number]){
        return state.pilots[number];
      } else {
        return null;
      }
    },
    getFilmByNumber: (state) => (number) => {
      if (state.films[number]){
        return state.films[number];
      } else {
        return null;
      }
    },
    getPlaceholderImg(state) {
      return state.placeholderImg;
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
      state.fetching = false;
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
      context.state.fetching = true;
      let APIdata = await axios.get(`https://swapi.dev/api/starships/?page=${context.state.nextPage}`);
      let arrayStarships = await APIdata.data.results.map( x => {
        let segments = x.url.split('/');
        let id = segments[segments.length - 2];
        return {...x, id};
      })
      context.commit('setStarships', arrayStarships)
    },
    async getAPIstarshipById( context, id ) {
      let APIdata = await axios.get(`https://swapi.dev/api/starships/${id}/`);
      APIdata.data.id = id;
      context.commit('setCurrentStarship', APIdata.data);
    },
    async getAPIpilots( context, {url, number} ){
      let APIdata = await axios.get(url);
      let pilot = APIdata.data;
      context.commit('pushCurrentArrayPilots', {pilot, number});
    },
    async getAPIfilm( context, {url, number} ){
      let APIdata = await axios.get(url);
      let film = APIdata.data;
      context.commit('pushCurrentArrayFilms', {film, number});
    },
    logout(context) {
      console.log('Logged out');
      context.commit('setLoggedin', false);
    }
  }
})
