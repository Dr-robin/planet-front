import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from '../theme/vue-material';

import main from './route/main.vue';
import login from './route/login.vue';

import user from './models/userData';

Vue.use(VueRouter);
Vue.use(VueMaterial);
require('./load-component');

const router = new VueRouter({
	routes: [
		{path: '/', component: main},
		{path: '/home', component: main},
		{path: '/login', component: login}
	],
	mode: 'history'
});

if(localStorage.getItem('session')) {
	user.getUserData(localStorage.getItem('session'));
}

let vm = new Vue({router}).$mount('#vue-root');

export default router;