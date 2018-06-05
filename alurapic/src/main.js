import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import dicionarioPtBR from './pt_BR';

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