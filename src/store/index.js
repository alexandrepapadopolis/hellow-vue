import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
      lastUpdated: null
    }
  },
  getters: {
    doubled(state) {
      return state.count * 2
    }
  },
  mutations: {
    increment(state, value = 1) {
      state.count += value
      state.lastUpdated = new Date().toISOString()
    },
    reset(state) {
      state.count = 0
      state.lastUpdated = new Date().toISOString()
    }
  },
  actions: {
    asyncIncrement({ commit }, value = 1) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment', value)
          resolve()
        }, 300)
      })
    }
  }
})
