<template>
    <div>
        <h1>Galeria de foto</h1>

        <router-link :to="{name:'fotos', params:{id}}" v-for="(id,i) of fotosID" :key="i">
            <button>foto {{id}}</button>
        </router-link>
        <Foto/>
        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
import Foto from '../components/Fotografia'
export default {
    components:{
        Foto
    },
    data(){
        return{
            fotosID:[1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(1);
        }
    }
}
</script>