import $ from 'jquery';

let userData = {
	data: {data: {}, isLogin: false},
	login(ad) {
		return new Promise((success, fail) => {
			$.post({url: 'https://api.planet.moe/login', data: {email: ad.email, password: ad.password}})
			.done((data) => {
				userData.getUserData(data.sessID).then(success, fail);
			}).fail((xhr) => {
				if(xhr.status >= 400) {
					if(xhr.responseJSON.error === 'invalid') {
						alert('아이디나 비밀번호가 잘못되었어요.');
					}
					else {
						alert('알 수 없는 오류가 발생했어요.');
						console.log(xhr.responseJSON);
					}
				}
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