import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

export const store = new vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    islogin: false
  },
  getters: {
    islogin (state) {
      return state.islogin
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
      if (payload) {
        state.islogin = true
      } else {
        state.islogin = false
      }
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    token ({commit}, payload) {
      commit('setToken', payload)
    },
    user ({commit}, payload) {
      commit('setUser', payload)
    }
  }

})
