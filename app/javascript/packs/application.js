import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './app.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        render: h => h(App)
    })
})