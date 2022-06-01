<template>
	<div class="Home">
		<div class="content">
			<div class="blog-title">
				问题总结
			</div>
			<bigCard />
			<Suspense>
				<template #default>
					<!-- 异步组件加载完成之后展示的控件 -->
					<div>
						<blogCard />
					</div>
				</template>
				<template #fallback>
					<!-- 异步组件加载中展示的控件 -->
					<div>
						<Ske />
					</div>
				</template>
			</Suspense>
		</div>
		<tabbar />
	</div>
</template>

<script>
	import Ske from './Skeleton.vue'
	import blogCard from './blogCard.vue'
	import bigCard from './bigCard.vue';
	import tabbar from './tarbar.vue';
	export default {
		components: {
			Ske,
			tabbar,
			bigCard,
			blogCard
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


		}
	}
</style>
