<template>
  <div>
    <ul class="list-group">
      <li v-for="(fruta,i) of frutas" :key="i" @click="aumentar(i)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{fruta.name}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
      
    </ul>
    <button class="btn btn-danger btn-block mt-2" @click="reset()">Reset</button>
  </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
    name: "Lista",
    computed:{
        // ordenarArray(){
        //     return this.frutas.sort((a,b)=> b.cantidad - a.cantidad)
        // },
        ...mapState(['frutas']),
    },
    methods:{
        ...mapMutations(['aumentar']),
        ...mapMutations(['reset']),
    }
};
</script>