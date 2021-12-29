import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 150
  },
  mutations: {
    aumentar(state, payload)
    {
      state.contador = state.contador + payload
    },
    disminuir(state, payload)
    {
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('aumentar', 10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado)
      {
        commit('aumentar', objeto.numero)
      }else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
