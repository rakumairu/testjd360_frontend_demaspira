import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pesanan: []
  },
  mutations: {
    addOrder(state, payload) {
      state.pesanan.push(payload)
    }
  },
  getters: {
    whatsapp: state => {
      return state.pesanan.filter(row => row.source === 'Whatsapp').length
    },
    calls: state => {
      return state.pesanan.filter(row => row.source === 'Call').length
    },
    emails: state => {
      return state.pesanan.filter(row => row.source === 'Email').length
    }
  }
})
