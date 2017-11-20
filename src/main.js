import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import RestList from './RestaurantesList.vue'
import RestTop from './RestaurantesTop.vue'
import Contacto from './Contacto.vue'

Vue.component('home',Home);
Vue.component('restaurantesL',RestList);
Vue.component('restaurantesT',RestTop);
Vue.component('contacto',Contacto);

new Vue({
  el: '#app',
  render: h => h(App)
})
