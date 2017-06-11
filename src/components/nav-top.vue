<template>
	<section>
		<nav class="navbar navbar-default navbar-fixed-top">
			<ul class="nav navbar-nav navbar-left">
				<li class="visible-xs-block"><a v-on:click="isMenuOpen = !isMenuOpen"><i class="fa fa-bars"></i></a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#"><i class="fa fa-bell-o"></i></a></li>
			</ul>
		</nav>
		<div id="bar-menu" v-bind:class="{active: isMenuOpen}">
			<div class="container">
				<ul>
					<li><a href="#"><i class="fa fa-television"></i><span>메뉴1</span></a></li>
					<li><a href="#"><i class="fa fa-globe"></i><span>메뉴2</span></a></li>
					<li><a href="#"><i class="fa fa-users"></i><span>메뉴3</span></a></li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				isMenuOpen: false
			}
		}
	}
</script>