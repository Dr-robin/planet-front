<template>
	<md-card md-with-hover id="card-login">
		<form @submit.prevent="login">
			<md-card-header>
				<div class="md-title">로그인</div>
				<div class="md-subhead">기다리고 있었어요!</div>
			</md-card-header>
			<md-card-content>
				<md-input-container>
					<md-icon>email</md-icon>
					<label>이메일</label>
					<md-input type="email" v-model="form.email" required></md-input>
				</md-input-container>
				<md-input-container>
					<md-icon>lock</md-icon>
					<label>비밀번호</label>
					<md-input type="password" v-model="form.password" required></md-input>
				</md-input-container>
			</md-card-content>
			<md-card-actions>
				<router-link tag="md-button" to="/register">회원 가입</router-link>
				<md-button class="md-raised md-primary" type="submit">로그인</md-button>
			</md-card-actions>
		</form>
	</md-card>
</template>
<script>
import $ from 'jquery';
import user from '../models/userData';
import router from '../main';

export default {
	data() {
		return {
			form: {}
		}
	},
	methods: {
		login() {
			if(this.form.email && this.form.password) {
				user.login({email: this.form.email, password: this.form.password}).then(() => {
					router.push('/home');
				}, (err) => {
					if(err.error === 'invalid') {
						alert('아이디나 비밀번호가 맞지 않아요.');
					}
				});
			}
		}
	}
}
</script>