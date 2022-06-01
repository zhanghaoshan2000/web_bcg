<template>
	<div class="mylife">
		<div class="mylife-content">
			<span class="img" v-for="(item,index) in data" :key="index">
				<img src="">
			</span>
		</div>
	</div>
	<paging />
</template>

<script>
	import paging from '../../../components/paging/index.vue';
	export default {
		components: {
			paging
		},
		setup() {
			const data = [1, 2, 3, 4, 5, 6]
			return {
				data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mylife {
		display: flex;
		width: 100%;
		border-top: 20px solid #F0EEEE;

		.mylife-content {

			display: flex;
			flex-wrap: wrap;
			padding: 0 160px;

			.img {
				width: 540px;
				height: 400px;
				background-color: pink;
				margin: 20px 20px;
			}
		}
	}
</style>
