<template>
  <div id="restaurante-add">
      <h1>Crear Nuevo Restaurante</h1>
      <form v-on:submit.prevent="guardarRestaurante()">
          <p>
              <label>Nombre</label>
              <input type="text" v-model="restaurante.nombre" >
          </p>
          <p>
              <label>Descripcion</label>
              <input type="text" v-model="restaurante.descripcion" >
          </p>
          <p>
              <label for="">Precio</label>
              <select v-model="restaurante.precio" >
                  <option value="">Seleccione una opcion...</option>
                  <option value="bajo">Bajo</option>
                  <option value="normal">Normal</option>
                  <option value="alto">Alto</option>
              </select>
          </p>
          <input type="submit" value="Guardar Restaurante">
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'restaurante-add',
  mounted(){

  },
  data(){
      return{
          restaurante:{
              nombre:'',
              descripcion:'',
              precio:'normal'
          }
      };
  },
  methods:{
      guardarRestaurante(){
        console.log(this.restaurante);
        var router = this.$router;
        
        var params = "json="+JSON.stringify(this.restaurante);
        axios.post('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/restaurantes',params)
            .then((respuesta)=>{
                console.log(respuesta);
                if(respuesta.statusText=='Created'){
                    router.push('/restaurantes');
                }
            })
            .catch((error)=>{
                console.log(error);
            });
      }
  }
}
</script>
