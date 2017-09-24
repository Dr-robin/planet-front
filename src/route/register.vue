<template>
	<md-card md-with-hover id="card-login">
		<form @submit.prevent="checkRecaptcha">
			<md-card-header>
				<div class="md-title">회원 가입</div>
				<div class="md-subhead">만나서 반가워요!</div>
			</md-card-header>
			<md-card-content>
				<md-input-container>
					<md-icon>person</md-icon>
					<label>별명</label>
					<md-input v-model="form.name" required></md-input>
				</md-input-container>
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
				<md-input-container>
					<md-icon>lock</md-icon>
					<label>비밀번호 확인</label>
					<md-input type="password" v-model="form.passwordRepeat" required></md-input>
				</md-input-container>
				<vue-recaptcha ref="invisibleRecaptcha" @verify="register" @expired="expired" size="invisible" sitekey="6LcCJSMUAAAAALAWFIlUJve1folbJZv4exea_7R_"></vue-recaptcha>
			</md-card-content>
			<md-card-actions>
				<router-link tag="md-button" to="/login">로그인</router-link>
				<md-button class="md-raised md-primary" type="submit" :disabled="isLoading">
					<md-spinner md-indeterminate v-if="isLoading"></md-spinner>
					<span v-else>회원 가입</span>
				</md-button>
			</md-card-actions>
		</form>
	</md-card>
</template>
<script>
import $ from 'jquery';
import user from '../models/userData';
import router from '../main';
import recaptcha from 'vue-recaptcha';

export default {
	data() {
		return {
			form: {}, isLoading: false
		}
	},
	components: {
		'vue-recaptcha': recaptcha
	},
	methods: {
		register(res) {
			if(this.form.name && this.form.email && this.form.password && this.form.password === this.form.passwordRepeat) {
				$.post({url: 'https://api.planet.moe/register', data: {
					name: this.form.name, email: this.form.email, password: this.form.password,
					'g-recaptcha-response': res
				}}).done((data) => {
					user.getUserData(data.sessID).then(() => {
						router.push('/home');
					});

				}).always(() => {
					this.isLoading = false;
				});
			}
		},
		checkRecaptcha() {
			this.isLoading = true;
			this.$refs.invisibleRecaptcha.execute();
		},
		expired() {
			this.$refs.invisibleRecaptcha.reset();
		}
	}
}
</script>