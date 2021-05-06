import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas:[
      {name:'Manzana',cantidad:0},
      {name:'Pera',cantidad:0},
      {name:'Naranja',cantidad:0},
    ]
  },
  mutations: {
    aumentar(state,i){
      state.frutas[i].cantidad++;
    },
    reset(state){
      state.frutas.map(e => e.cantidad=0);
    }
  },
  actions: {
  },
  modules: {
  }
})
