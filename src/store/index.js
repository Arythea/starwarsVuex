import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    starships: [],
    nextPage: 1,
    currentStarship: null,
    finish: false
  },
  getters: {
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
    }
  },
  modules: {
  }
})
