<template>
	<div class="Skeleton">
		<content-loader :width="352" :height="438" :speed="1" primaryColor="#F2F2F2" secondaryColor="#ecebeb">
			<rect x="0" y="0" rx="0" ry="0" width="352" height="438" />
		</content-loader>
	</div>

</template>

<script>
	import {
		ContentLoader
	} from 'vue-content-loader'

	export default {
		components: {
			ContentLoader
		}
	}
</script>

<style lang="scss" scoped>
	.Skeleton{
		
	}
</style>
