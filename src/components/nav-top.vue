<template>
	<section>
		<nav class="navbar navbar-default navbar-fixed-top">
			<ul class="nav navbar-nav navbar-left">
				<li class="visible-xs-block"><a @click="isMenuOpen = !isMenuOpen"><i class="fa fa-bars"></i></a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right" v-if="user.isLogin">
				<li><a href="#"><i class="fa fa-bell-o"></i></a></li>
			</ul>
		</nav>
		<div id="bar-menu" :class="{active: isMenuOpen}">
			<div class="container">
				<ul v-if="user.isLogin">
					<li><a href="#"><i class="fa fa-television"></i><span>게임</span></a></li>
					<li><a href="#"><i class="fa fa-globe"></i><span>커뮤니티</span></a></li>
					<li><a href="#"><i class="fa fa-users"></i><span>{{user.data.nickname}}</span></a></li>
				</ul>
				<ul v-else>
					<li><a href="#" @click="login()"><i class="fa fa-sign-in"></i><span>로그인</span></a></li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script>
	import userData from '../models/userData';
	import $ from 'jquery';

	export default {
		data() {
			return {
				isMenuOpen: false,
				user: userData.data
			}
		},
		methods: {
			login() {
				$.post('https://api.planet.moe/session', (data) => {
					localStorage.setItem('session', data.sessID);
					window.location.replace('https://api.planet.moe/auth/' + data.sessID);
				});
			}
		}
	}
</script>