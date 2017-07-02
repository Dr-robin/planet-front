import Vue from 'vue';
import VueRouter from 'vue-router';

import main from './route/main.vue';
import login from './route/login.vue';

Vue.use(VueRouter);
require('./load-component');

const router = new VueRouter({
	routes: [
		{path: '/', component: main},
		{path: '/home', component: main},
		{path: '/login', component: login}
	],
	mode: 'history'
});

let vm = new Vue({router}).$mount('#vue-root');