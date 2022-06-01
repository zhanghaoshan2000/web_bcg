<template>
	<div class="blog-card">
		<div class="blog-img">
			<div class="blog-card-img">
				<img :src="item.image">
			</div>
		</div>
		<div class="blog-card-time">
			{{item.time}}
		</div>
		<div class="blog-card-title">
			{{item.content}}
		</div>
		<div class="blog-card-dec">
			<div class="tag">
				<i class="iconfont icon-biaoqian"></i>
			</div>
			<div class="author">
				<span>作者:<span>{{item.author}}</span></span>
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
		props: {
			item: {

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
		overflow: hidden;
		.blog-img {
			display: flex;
			justify-content: center;
			.blog-card-img {
				width: 200px;
				height: 200px;
				border: 1px solid rgba(179, 186, 197, 1);
				border-radius: 5px;
				img {
					width: 100%;
					height: 100%;
					border-radius: 5px;
				}
			}
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
			font-size: 20px;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden; //溢出内容隐藏
			text-overflow: ellipsis; //文本溢出部分用省略号表示
			display: -webkit-box; //特别显示模式
			-webkit-line-clamp: 3; //行数
			line-clamp: 3;
			-webkit-box-orient: vertical; //盒子中内容竖直排列
		}

		.blog-card-dec {
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.icon-biaoqian {
				font-size: 26px;
				color: $content-deccolor;
			}

			.author {
				font-size: 16px;
				letter-spacing: 5px;
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
