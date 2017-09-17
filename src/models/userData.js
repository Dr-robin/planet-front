import $ from 'jquery';

export default {
	data: {data: {}, isLogin: false},
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