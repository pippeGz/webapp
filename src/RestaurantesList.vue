<template>
    <div>
      <ul id="restaurantesL" v-if="restaurantes != null">
        <li v-for="restaurante in restaurantes">
          <strong>{{restaurante.title}}</strong>
          <p>
            <router-link :to="{name: 'restaurante', params:{id: restaurante.id}}">Ver</router-link>
            <router-link :to="{name: 'editar-restaurante', params:{id: restaurante.id}}">Editar</router-link>
            <span v-if="showBorrar != restaurante.id" >
              <a @click="borrarRestaurante(restaurante.id)">Eliminar</a>
            </span>
            <span v-else>
              <p>¿Estas seguro de querer borrarlo?</p>
              <button @click="cancelarBorrado()">Cancelar</button>
              <button @click="confirmarBorrado(restaurante.id)">Borrar</button>
            </span>
          </p>
        </li> 
      </ul>
      <span v-else>Cargando restaurantes...</span>
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
      restaurantes: null,
      showBorrar:null
    }
  },
  methods:{
    getRestaurantes(){
      axios.get('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/restaurantes')
        .then((respuesta)=>{
          this.restaurantes = respuesta.data;
        });
    },
    borrarRestaurante(id){
      this.showBorrar = id; 
    },
    cancelarBorrado(){
      this.showBorrar = null; 
    },
    confirmarBorrado(id){
      axios.get('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/borrarRestaurantes/'+id)
        .then((respuesta)=>{
          this.showBorrar = null;
          this.getRestaurantes();
        });
    }
  }
}
</script>

<style lang="scss">
  #restaurantesL{
    padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding: 20px;
			overflow:hidden;
		}
  }
</style>