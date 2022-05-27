<template>
	<div class="Future">
		<img src="../../assets/image/banner.png" class="banner">
		<div class="sunshine">
		</div>
		<div class="road">
			<router-link class="titlex" to="/now">
				<div class="myblog-future">
					<i class="iconfont icon-guihua"></i>
				<span>现在</span>
				</div>
			</router-link>
			<router-link class="titlex" to="/road">
				<div class="myblog-future">
					<i class="iconfont icon-xuexi"></i>
					<span>方向</span>
				</div>
			</router-link>
			<router-link class="titlex" to="/futures">
				<div class="myblog-future">
					<i class="iconfont icon-gerenzhiyeguihua"></i>
					<span>未来</span>
				</div>
			</router-link>
		</div>
		<div class="content-future">
			<router-view class="" name="future"></router-view>
			<router-view class="" name="road"></router-view>
			<router-view class="" name="now"></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	@keyframes trans {
		from {
			transform: translateX(-1280px);
		}

		to {
			transform: translateX(20px);
		}
	}

	@keyframes content {
		from {
			transform: translateY(1280px);
		}

		to {
			transform: translateY(20px);
		}
	}

	@keyframes future {
		from {
			transform: translateY(-1280px);
		}

		to {
			transform: translateY(20px);
		}
	}

	.Future {
		width: 100%;
		height: 100vh;
		background-image: url(../../assets/image/macos-big-sur-1280x720-dark-wwdc-2020-22655.png);
		background-size: cover;
		background-position: center;
	}

	.banner {
		position: vh relative;
		transition: all 0.5s;
		animation: trans 1.5s alternate;
		border-radius: 10px;
		z-index: 10;
		margin-top: 20px;
		margin-left: 20px;

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
		margin-left: 574px;
		border-radius: 50%;
		-webkit-backface-visibility: hidden;
		animation: trans 1.5s alternate;
	}

	.sunshine:hover {
		background-color: #fff;
		box-shadow: 0 0 10px #fff,
			0 0 20px #fff,
			0 0 40px #fff,
			0 0 80px #fff,
			0 0 120px #fff,
			0 0 160px #fff;
	}

	.text {}

	.road {
		width: 500px;
		height: 400px;
		background: rgba(36, 39, 59, 0.8);
		float: right;
		margin-right: 30px;
		margin-top: 48PX;
		animation: future 1.5s alternate;
		border-radius: 10PX;
		font-size: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		.titlex {
			text-decoration: none;
			color: #fff;
			
			.myblog-future{
				display: flex;
				align-items: center;
				.iconfont{
					font-size: 45px;
					
					padding: 10px;
					border-radius: 50%;
					margin-right: 20px;
					&:hover{
						
					}
				}
				
			}
		}
	}

	.content-future {
		margin-top: 58px;
		width: 98%;
		height: 320px;
		background: rgba(36, 39, 59, 0.6);
		animation: content 1.5s alternate;
		margin-left: 20PX;
		border-radius: 10PX;
		color: #fff;
		font-size: 20px;
		padding: 30px;
		box-sizing: border-box;
		letter-spacing: 2px;
	}
</style>
