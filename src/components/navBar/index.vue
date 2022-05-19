<template>
	<div class="navBar">
		<ul class='logo'>
			<li class="logo-blog"></li>
			<li>Sketch UX Kit</li>
		</ul>
		<ul class="meun">
			<router-link class="meun-item" to="/">首页</router-link>
			<router-link class="meun-item" to="/">Services</router-link>
			<router-link class="meun-item" to="/">Pricing</router-link>
			<router-link class="meun-item" to="/">博客</router-link>
			<router-link class="meun-item" to="/about">关于我</router-link>
			<button type="button" class="btn">Button</button>
		</ul>
	</div>
	<div class="header"></div>
</template>

<script>
	export default {
		name:'NavBar',
		
		setup(){
			
		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';
	.navBar {
		display: flex;
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		height: 64px;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		top: 0;
		flex-shrink: 0;
		z-index: 99;
		.logo {
			display: flex;
			font-size: 16px;
			align-items: center;
			margin-left: 160px;
			height: 20px;
			list-style-type: none;
	
			.logo-blog {
				width: 60px;
				height: 45px;
				background-color: grey;
				margin-right: 16px;
			}
		}
	
		.meun {
			display: flex;
			list-style-type: none;
			align-items: center;
	
			.meun-item {
				padding: 20px;
				font-size: 14px;
				text-decoration: none;
				color:$content-fontcolor;
			}
	
		}
	
		.btn {
	
			margin-right: 160px;
			margin-left: 36px;
			width: 96px;
			height: 32px;
			background: rgba(235, 236, 240, 1);
			border: none;
			font-size: 14px;
			border-radius: 5px;
		}
	}
	.header {
		width: 1px;
		height: 64px;
	}
</style>
