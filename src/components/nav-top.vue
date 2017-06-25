<template>
	<section>
		<nav class="navbar navbar-default navbar-fixed-top">
			<ul class="nav navbar-nav navbar-left">
				<li class="visible-xs-block"><a @click="isMenuOpen = !isMenuOpen"><i class="fa fa-bars"></i></a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#"><i class="fa fa-bell-o"></i></a></li>
			</ul>
		</nav>
		<div id="bar-menu" :class="{active: isMenuOpen}">
			<div class="container">
				<ul v-if="user.isLogin">
					<li><a href="#"><i class="fa fa-television"></i><span>메뉴1</span></a></li>
					<li><a href="#"><i class="fa fa-globe"></i><span>메뉴2</span></a></li>
					<li><a href="#"><i class="fa fa-users"></i><span>메뉴3</span></a></li>
				</ul>
				<ul v-else>
					<li><router-link to="/login"><i class="fa fa-sign-in"></i><span>로그인</span></router-link></li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script>
	import userData from '../models/userData';

	export default {
		data() {
			return {
				isMenuOpen: false,
				user: userData.data
			}
		}
	}
</script>