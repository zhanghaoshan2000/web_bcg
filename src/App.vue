<template>
	<div id="nav">
		<NavBar />
	</div>
	<router-view />
</template>

<script type="text/javascript">
	import NavBar from './components/navBar/index.vue'
	export default {
		components:{
			NavBar
		}
	}
</script>
<style lang="scss">
	
</style>
