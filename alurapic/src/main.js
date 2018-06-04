import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResouce);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history' // isso aqui é para nao aparecer o # antes dos links da rota
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});