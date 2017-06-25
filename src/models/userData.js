import $ from 'jquery';

export default {
	data: {data: {}, isLogin: false},
	login(email, password) {
		return new Promise((success, fail) => {
			$.post('/public/test/login.json', {email, password})
				.done((data) => {
					this.getUserData(data.sessID).then(success, fail);
				})
				.fail(() => { fail(); });
		});
	},
	getUserData(sessID) {
		return new Promise((success, fail) => {
			$.get({url: 'https://api.planet.moe/user/me', headers: {Authorization: sessID}})
				.done((data) => {
					localStorage.setItem('session', sessID);
					$.ajaxSetup({headers: {Authorization: sessID}});
					this.data.data = data.profile;
					this.data.isLogin = true;
					success();
				})
				.fail(() => { fail(); });
		});
	}
};