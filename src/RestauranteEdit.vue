<template>
  <div id="restaurante-edit">
      <h1>Editar Restaurante</h1>
      <form v-on:submit.prevent="guardarRestaurante()">
          <p>
              <label>Nombre</label>
              <input type="text" v-model="restaurante.title" >
          </p>
          <p>
              <label>Descripcion</label>
              <input type="text" v-model="restaurante.descr" >
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
  name: 'restaurante-edit',
  mounted(){
    this.id = this.$route.params.id;
    
    axios.get('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/restaurantes/'+this.id)
        .then((respuesta)=>{
          this.restaurante = respuesta.data;
          console.log(this.restaurante);
        });
  },
  data(){
      return{
          id:null,
          restaurante:{
              title:'',
              descr:'',
              precio:'normal'
          }
      };
  },
  methods:{
      guardarRestaurante(){
        console.log(this.restaurante);
        var router = this.$router;
        var id = this.id;

        var params = "json="+JSON.stringify(this.restaurante);
        axios.post('https://my-json-server.typicode.com/pippeGz/FakeApiRestaurantes/restaurantes/'+id,params)
            .then((respuesta)=>{
                console.log(respuesta);
                if(respuesta.statusText=='Created'){
                    router.push('/restaurantes/'+id);
                }
            })
            .catch((error)=>{
                console.log(error);
            });
      }
  }
}
</script>
