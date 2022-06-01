<template>
	<div class="project">
		<div class="banner">
			<div class="title">
				<span class="induct">Hello 我是向阳</span>
				<span class="induct">欢迎来到我的life!</span>
				<span class="content-banner">{{data.say1}}</span>
			</div>
			<div class="city">
				<img src="../../assets/image/city.png">
			</div>
		</div>
		<div class="life">
			<span class="life-title">个人生活:</span>
		</div>
		<div class="content">
			<div class="main-life">
				<div class="content-title">
					<router-link class="life-btn" to="/collage">大学生活</router-link>
					<!-- <router-link class="life-btn" to="/mylife">个人生活</router-link> -->
					<router-link class="life-btn" to="/small">旅游</router-link>
					<router-link class="life-btn" to="/travel">琐事</router-link>
				</div>
				<div class="main">
					<router-view class="" name="collage"></router-view>
					<router-view class="" name="mylife"></router-view>
					<router-view class="" name="small"></router-view>
					<router-view class="" name="travel"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					say1: '生活源于记录！记录每一刻的精彩！也许我们留不住时间但我们可以记录住精彩的瞬间！不去追逐，永远不会拥有。不往前走，永远原地停留！',
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.project {
		position: relative;
		height:auto;

		.banner {
			width: 100%;
			background-color: #F0EEEE;
			height: 742px;

			.title {
				display: flex;
				flex-direction: column;
				position: absolute;
				top: 200px;
				left: 197px;

				.induct {
					font-size: 48px;
					font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
					letter-spacing: 10px;
					font-weight: 600;
				}

				.content-banner {
					width: 450px;
					display: flex;
					flex-wrap: wrap;
					margin-top: 20px;
					letter-spacing: 2px;
				}
			}

			.city {
				position: absolute;
				top: 140px;
				right: 197px;
				width: 540px;
				height: 720px;

				img {
					border-radius: 10px;
					width: 100%;
					height: 100%;
				}
			}
		}

		.life {
			font-size: 35px;
			font-weight: 600px;
			font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
			margin-top: 80px;
			margin-left: 190px;
		}

		.content {
			margin-top: 50px;
			width: 100%;
			display: flex;
			justify-content: center;

			.main-life {
				width: 1510px;
				height: 1470px;
				box-sizing: border-box;

				.content-title {
					width: 100%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					height: 60px;

					.life-btn {
						font-size: 15px;
						text-decoration: none;
						margin: 0 10px;
						padding: 5px 0;
						color: rgba(170, 170, 170, 1);
					}

					.router-link-active {
						border-bottom: 2px solid rgba(0, 0, 0, 1);
						color: #000;
					}
				}
				.main{
					margin-top: 40px;
				}
			}
		}
	}
</style>
