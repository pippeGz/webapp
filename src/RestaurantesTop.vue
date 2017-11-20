<template>
    <h2>Esta es la {{texto}} : {{id_restaurante}}</h2>
</template>

<script>
export default {
  name: 'restaurantesT',
  mounted(){
    this.id_restaurante = this.$route.params.id;
  },
  data () {
    return {
      texto: 'página Restaurante Destacado',
      id_restaurante:null
    }
  }
}
</script>