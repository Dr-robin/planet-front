import $ from 'jquery';

let userData = {
	data: {data: {}, isLogin: false},
	login(ad) {
		return new Promise((success, fail) => {
			$.post({url: 'https://api.planet.moe/login', data: {email: ad.email, password: ad.password}})
			.done((data) => {
				this.getUserData(data.sessID).done(success, fail);
			});
		});
	},
	getUserData(sessID) {
		return new Promise((success, fail) => {
			$.get({url: 'https://api.planet.moe/profile/me', headers: {Authorization: sessID}})
			.done((data) => {
				localStorage.setItem('session', sessID);
				$.ajaxSetup({headers: {Authorization: sessID}});
				this.data.data = data.profile;
				this.data.isLogin = true;
				success();
			})
			.fail((xhr) => {
				if(xhr.status === 401) {
					localStorage.removeItem('session');
				}
				fail();
			});
		});
	}
};

export default userData;