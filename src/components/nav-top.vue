<template>
	<md-toolbar>
		<md-button class="md-icon-button">
			<md-icon>menu</md-icon>
		</md-button>

		<h2 class="md-title" style="flex: 1">플래닛</h2>

		<md-button class="md-icon-button">
			<md-icon>favorite</md-icon>
		</md-button>
	</md-toolbar>
</template>
<script>
	import userData from '../models/userData';
	import $ from 'jquery';

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
			}
		}
	}
</script>