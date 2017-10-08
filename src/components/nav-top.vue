<template>
	<section>
		<md-toolbar class="hideable">
			<h2 class="md-title" style="flex: 1">플래닛</h2>
			<router-link tag="md-button" to="/login" v-if="!user.isLogin">로그인</router-link>
			<md-button class="md-icon-button" v-else @click="toggleSideMenu">
				<md-icon>menu</md-icon>
			</md-button>
		</md-toolbar>
		<md-sidenav class="md-right md-fixed" ref="sidenav">
			<md-list>
				<md-list-item>
					<md-avatar>
						<img src="https://figuya.com/uploads/product/profile_picture/7692/profile_Nendoroid_692_You_Watanabe_vorschau.jpg" alt="profile">
					</md-avatar>
					<span>{{user.data.name}}</span>
				</md-list-item>
			</md-list>
		</md-sidenav>
		<md-bottom-bar class="hideable">
			<md-bottom-bar-item md-icon="home" md-active>활동</md-bottom-bar-item>
			<md-bottom-bar-item md-icon="public">둘러보기</md-bottom-bar-item>
			<md-bottom-bar-item md-icon="games">게임</md-bottom-bar-item>
			<md-bottom-bar-item md-icon="more">더보기</md-bottom-bar-item>
		</md-bottom-bar>
	</section>
</template>
<script>
	import userData from '../models/userData';
	import $ from 'jquery';

	let prevScroll = $(this).scrollTop();
	$(window).scroll(function() {
		let nowScroll = Math.min($(this).scrollTop(), $(document).height() - $(window).height());
		if(nowScroll <= 64 || prevScroll > nowScroll + 15) {
			$('.hideable').removeClass('hidden');
			prevScroll = nowScroll;
		}
		else if(prevScroll + 15 < nowScroll) {
			$('.hideable').addClass('hidden');
			prevScroll = nowScroll;
		}
	});

	export default {
		data() {
			return {
				user: userData.data
			}
		},
		methods: {
			login() {
				$.post('https://api.planet.moe/session', (data) => {
					localStorage.setItem('session', data.sessID);
					window.location.replace('https://api.planet.moe/auth/' + data.sessID);
				});
			},
			toggleSideMenu() {
				this.$refs.sidenav.toggle();
			}
		}
	}
</script>