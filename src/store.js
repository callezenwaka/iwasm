import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    darkTheme: JSON.parse(localStorage.getItem('isDarkTheme'))
  },
  getters: {
    isDarkTheme: state => state.darkTheme,
    isWhiteTheme: state => !state.darkTheme
  },
  mutations: {
    SET_DARK_THEME (state, payload) {
      state.darkTheme = payload.checked
      localStorage.setItem('isDarkTheme', JSON.stringify(payload.checked))
    }
  },
  actions: {
    SET_DARK_THEME ({ commit }, payload) {
      // localStorage.setItem('isDarkTheme', JSON.stringify(payload.checked))
      commit('SET_DARK_THEME', payload)
    }
  }
})
