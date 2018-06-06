import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import dicionarioPtBR from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/css/teste.css';
import './assets/js/teste.js';

Vue.use(VueResouce);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);
const router = new VueRouter({ 
  routes,
  mode: 'history' // isso aqui é para nao aparecer o # antes dos links da rota
});

Vue.use(VeeValidate, {
  
  locale: 'pt_BR',
  dictionary: {
    pt_BR: dicionarioPtBR
  }

});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});