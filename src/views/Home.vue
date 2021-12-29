<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{titulo}}</h1>
    <h1
    :style="colorContador"
    >Mi contador : {{contador}}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <btn-disminuir></btn-disminuir>
    <hr>
    <btn-accion :estado='true'></btn-accion>
    <btn-accion :estado='false'></btn-accion>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
import BtnAccion from '../components/btnAccion.vue'
import BtnDisminuir from '../components/btnDisminuir.vue'

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BtnAccion
    
  },
  data(){
    return {
    titulo : 'Mi Contador'
    }
  },
  computed:{
    ...mapState(['contador']),
  colorContador(){
    return [this.contador > 100 ? {'color' : 'green'} : {'color' : 'red'}]
  }
  },
  methods:{
    ...mapMutations(['aumentar']),
    ...mapActions(['accionIncrementar']),
  }
}
</script>
