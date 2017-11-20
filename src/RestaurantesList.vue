<template>
    <div>
      <ul id="restaurantesL">
        <li v-for="restaurante in restaurantes">
          <strong>{{restaurante.title}}</strong>
          </li> 
      </ul>
      <!-- <span v-else>Cargando restaurantes...</span> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'restaurantesL',
  mounted(){
    this.getRestaurantes();
  },
  data () {
    return {
      texto: 'página Restaurantes',
      restaurantes: null
    }
  },
  methods:{
    getRestaurantes(){
      axios.get('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/restaurantes')
        .then((respuesta)=>{
          this.restaurantes = respuesta.data;
        });
    }
  }
}
</script>

