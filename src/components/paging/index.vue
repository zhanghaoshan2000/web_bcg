<template>
	<div class="paging">
		<div class="pravPage">上一页</div>
		<div class="pages">
			<!-- {{item}} -->
			1
		</div>
		<div class="nextPage">下一页</div>
	</div>
	<div class="bck"></div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.paging {
		display: flex;
		font-size: 20px;
		font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
		width: 100%;
		padding: 5px;
		margin-top: 20px;
		justify-content: center;
		box-sizing: border-box;
		.pravPage {
			margin-right: 20px;
			color: #fff;
			padding: 5px;
			text-align: center;
			line-height: 30px;
			border-radius: 5px;
			font-weight: 600;
			background-color: #0D0D0D;
			cursor: pointer;
		}
	
		.pages {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;
			padding: 5px;
			background-color: #0D0D0D;
			color: #fff;
			border-radius: 5px;
			margin: 0 5px;
			font-weight: 600;
			cursor: pointer;
		}
	
		.active {
			background-color: #FFD2A4;
		}
	
		.nextPage {
			margin-left: 20px;
			color: #fff;
			height: 30px;
			padding: 5px;
			text-align: center;
			line-height: 30px;
			border-radius: 5px;
			background-color: #0D0D0D;
			font-weight: 600;
			cursor: pointer;
		}
	}
	.bck{
		width: 1px;
		height: 50px;
	}
</style>
