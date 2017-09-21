<template>
	<div id="panel-login" class="panel panel-default">
		<div class="panel-heading">로그인</div>
		<div class="panel-body">
			<form @submit.prevent="login">
				<div class="form-group">
					<label for="input-email">이메일</label>
					<input type="email" class="form-control" id="input-email" v-model="form.email" placeholder="maki@planet.moe">
				</div>
				<div class="form-group">
					<label for="input-password">비밀번호</label>
					<input type="password" class="form-control" id="input-password" v-model="form.password" placeholder="********">
				</div>
				<button type="submit" class="btn btn-default">로그인</button>
			</form>
		</div>
	</div>
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
				});
			}
		}
	}
}
</script>