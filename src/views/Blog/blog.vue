<template>
	<div class="Home">
		<!-- <NavBar /> -->
		<div class="content">
			<div class="blog-title">
				问题总结
			</div>
			<bigCard />
			<!-- 卡片 -->
			<div class="card">
				<Card v-for="item in data" :key="item.id" :item="item"/>
			</div>
		</div>
		<tabbar />
	</div>
</template>

<script>
	// import NavBar from './navBar.vue';
	import Card from '../../components/card/index.vue';
	import bigCard from './bigCard.vue';
	import tabbar from './tarbar.vue';
	export default {
		components: {
			// NavBar,
			Card,
			bigCard,
			tabbar 
		},
		setup() {
			const data = [1, 2, 3, 4, 5, 6]
			return {
				data
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';

	.Home {
		background-color: rgb(244, 245, 247);
		height: 1976px;
		box-sizing: border-box;
		position: relative;

		.content {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;

			.blog-title {
				width: 100%;
				text-align: center;
				margin-top: 54px;
				margin-bottom: 54px;
				font-size: 56px;
			}

			.card {
				display: flex;
				width: 1120px;
				justify-content: space-between;
				flex-wrap: wrap;
			}
		}

	}
</style>
