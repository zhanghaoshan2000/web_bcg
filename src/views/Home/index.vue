<template>
	<div class="Home">
		<div class="Img">
		</div>
		<div class="text">
			<div class="title">
				<i class="iconfont icon-x_jiantouzuo"></i>
				<h2 class="blogName"><span>Welcome</span><span>Blog</span></h2>
				<i class="iconfont icon-x_jiantouyou"></i>
			</div>
			<h2 class="saying">自知不足,尚在努力!</h2>
			<button type="button" class="About">关于博客</button>
			<div class="scroll">
				<span>Scroll</span>
				<div class="iconfont icon-xiajiantou">
				</div>
			</div>
			<div class="sunshine">
				<div class="shine">

				</div>
			</div>
		</div>
		<h3 class="text-say">
		</h3>
		<Squre />
	</div>
</template>

<script>
	import Squre from '../../components/squre/index.vue';
	export default {
		name: 'Home',
		components: {
			Squre
		},
		setup() {

		}
	}
</script>
<style lang="scss" scoped>
	.Home {
		width: 100%;
		height: 1976px;

		.Img {
			width: 100%;
			height: 1080px;
			background: url(../../assets/image/bcg2.png);
			background-size: cover;
		}

		.text {
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			position: absolute;
			flex-direction: column;
			letter-spacing: 5px;
			top: 120px;

			.title {
				display: flex;
				align-items: center;

				.iconfont {
					font-size: 30px;
					color: #7B99A4;
				}

				.blogName {
					color: #000;
					font: italic 55px Georgia, serif;

					span {
						transition: 0.5s;
					}
				}
			}

			.blogName:hover span:nth-child(1) {
				margin-left: 30px;
			}

			.blogName:hover span:nth-child(1):after {
				margin-left: 10px;
				content: "My";
			}

			.blogName:hover span:nth-child(2) {
				margin-left: 20px;
			}

			.blogName:hover span {
				color: #EAAA92;
				text-shadow: 0 0 10px #EAAA92,
					0 0 20px #EAAA92,
					0 0 40px #EAAA92,
					0 0 80px #EAAA92,
					0 0 120px #EAAA92,
					0 0 160px #EAAA92;
			}

			.saying {
				margin-top: 30px;
			}

			.About {
				margin-top: 40px;
				border: none;
				width: 120px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background-color: transparent;
				border: 2px solid #fff;
				border-radius: 5px;
				transition: 0.5s;
			}

			.About:hover {
				transform: scale(1.3);
			}

		}

		.scroll {
			margin-top: 470px;
			font-size: 46px;
			text-align: center;
			color: #fff;

			.iconfont {
				color: #fff;
				font-size: 70px;
				transition: all 0.5s;
				// transform: translateY(10px);
				animation: scroll 1.5s infinite alternate;
			}

			@keyframes scroll {
				from {
					transform: translateY(50px);
				}

				to {}
			}
		}

		.shine {
			margin-top: -540px;
			width: 360px;
			height: 360px;
			background-color: transparent;
			border-radius: 50%;
		}

		.sunshine :hover {
			background-color: red;
			width: 360px;
			height: 360px;
			transition: 0.5s;
			background-color: #fff;
			border-radius: 50%;
			box-shadow: 0 0 10px #fff,
				0 0 20px #fff,
				0 0 40px #fff,
				0 0 80px #fff,
				0 0 120px #fff,
				0 0 160px #fff;
		}

		.text-say {
			position: absolute;
			font-size: 20px;
			margin-top: 20;
			margin-top: -700px;
			margin-left: 200px;
			transform: rotate(20deg);
		}
	}
</style>
