import Vue from 'vue';

function loadScripts(r, t) {
	r.keys().forEach((k) => {
		let name = k.substr(2).split('.')[0];
		switch(t) {
			case 'component':
				Vue.component(name, r(k));
				break;
		}
	});
}
loadScripts(require.context('./components/', true, /\.vue$/), 'component');