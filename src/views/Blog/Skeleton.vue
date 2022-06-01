<template>
	<div class="card">
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
	</div>
</template>

<script>
	import Skeleton from '../../components/Skeleton/card.vue'
	export default {
		components:{
			Skeleton
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		display: flex;
		width: 1120px;
		justify-content: space-between;
		height: 930px;
		flex-wrap: wrap;
	}
</style>
