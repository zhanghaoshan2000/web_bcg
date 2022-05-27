<template>
	<div class="card-blog">
		<div class="card-left">
			<div class="title-blog">
				水擦拭擦
			</div>
			<div class="content-blog">
				打法擦擦打法擦擦打法擦擦打法擦打法擦擦
			</div>
			<div class="bottom-blog">
				2022-02-06
			</div>
		</div>
		<div class="card-right">
			<img src="../../assets/image/face-male-1.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		setup(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.card-blog {
		display: flex;
		width: 800px;
		height: 200px;
		padding: 30px;
		background-color: green;
		justify-content: space-between;
		box-sizing: border-box;
		border-radius: 10px;
		margin: 20px;
		.card-left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
	
			.title-blog {
				font-size: 20px;
	
			}
		}
	
		.content-blog {
			font-size: 16px;
			color: red;
		}
	
		.card-right {
			width: 150px;
			height: 120px;
			background-color: pink;
	
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
