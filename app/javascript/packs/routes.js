import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeIndex from './components/home/index.vue';
import Estagiarios from './components/estagiarios/index.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomeIndex },
        { path: '/estagiarios', component: Estagiarios }
    ]
});
export default router;