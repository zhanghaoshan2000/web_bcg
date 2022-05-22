<template>
	<div class="Future">
		<img src="../../assets/image/banner.png" class="banner">
		<div class="sunshine">
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@keyframes trans {
		from {
			transform: translateX(-1280px);
		}

		to {
			transform: translateX(20px);
		}
	}

	.banner {
		position: relative;
		transition: all 0.5s;
		animation: trans 1.5s alternate;
		border-radius: 10px;
		z-index: 10;
	}

	.sunshine {
		z-index: 99;
		position: absolute;
		margin-top: -395px;
		width: 160px;
		height: 160px;
		background-color: transparent;
		float: left;
		transition: all 0.5s;
		margin-left: 554px;
		border-radius: 50%;
		animation: trans 1.5s alternate;
	}
	.sunshine:hover{
		background-color: #fff;
		box-shadow: 0 0 10px #fff,
			0 0 20px #fff,
			0 0 40px #fff,
			0 0 80px #fff,
			0 0 120px #fff,
			0 0 160px #fff;
	}
	.text{
		
	}
</style>
