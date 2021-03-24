import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import experience from './modules/experience';
import interest from './modules/interest';
import education from './modules/education';

Vue.use(Vuex)

export default new Vuex.Store({
state: {
	celebrant: 'Callis',
},
getters: {
	celebrant: state => state.celebrant,
},
mutations: {
	GET_CELEBRANT(state, celebrant) {
		state.celebrant = celebrant;
	},
},
actions: {
	async getCelebrant({commit}, celebrant) {
		commit('GET_CELEBRANT', celebrant);
	},
},
modules: {
	experience,
	interest,
	education,
	auth,
}
})
