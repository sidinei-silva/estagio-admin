import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './app.vue'
import Login from './components/login/index'
import 'vuetify/dist/vuetify.min.css'
import  router from './routes.js';

Vue.use(Vuetify);

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        router,
        render: h => h(App)
    });
});
