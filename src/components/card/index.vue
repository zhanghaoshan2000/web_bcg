<template>
	<div class="blog-card">
		<div class="blog-card-img">
			
		</div>
		<div class="blog-card-time">
			20 December 2018 by Mikolaj Dobrucki
		</div>
		<div class="blog-card-title">
			Blog post title goes here ipsum dolor sit amet, consectetur
		</div>
		<div class="blog-card-dec">
			<div class="tag">
				<i class="iconfont icon-biaoqian"></i>
			</div>
			<div class="dot-item">
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		props:{
			item:{
				
			}
		},
		setup() {

		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';
	.blog-card {
		width: 352px;
		height: 438px;
		background: rgba(235, 236, 240, 1);
		padding: 40px;
		box-sizing: border-box;
		text-align: center;
		margin-bottom: 32px;

		.blog-card-img {
			width: 272px;
			height: 184px;
			border: 1px solid rgba(179, 186, 197, 1);
		}

		.blog-card-time {
			margin-top: 24px;
			margin-bottom: 12px;
			color: $content-fontcolor;
			letter-spacing: 0.2px;
			font-size: 12px;
		}

		.blog-card-title {
			color: $content-fontcolor;
			font-size: 24px;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden; //溢出内容隐藏
			text-overflow: ellipsis; //文本溢出部分用省略号表示
			display: -webkit-box; //特别显示模式
			-webkit-line-clamp: 3; //行数
			line-clamp: 3;
			-webkit-box-orient: vertical; //盒子中内容竖直排列
		}

		.blog-card-dec {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;

			.icon-biaoqian {
				font-size: 26px;
				color: $content-deccolor;
			}

			.dot-item {
				display: flex;
				flex-direction: column;

				.dot {
					display: inline-block;
					width: 4px;
					height: 4px;
					border-radius: 50%;
					background-color: $content-deccolor;
					margin: 3px;
				}
			}
		}
	}
</style>
