<template>
	<div class="about">
		<div class="Bout-me">
			<img src="../../assets/image/face-male-1.jpg">
		</div>
		<span class="induct">关于我</span>
		<ul class="icon-item">
			<div class="age">
				<router-link class="lkv" to="/age">
					<li class="iconfont icon-nianling"></li>
					<span class="text">年龄:00后</span>
				</router-link>
			</div>
			<div class="age">
				<router-link class="lkv" to="/education">
					<li class="iconfont icon-w_xuewei-"></li>
					<span class="text">学历:本科</span>
				</router-link>
			</div>
			<div class="age">
				<router-link class="lkv" to="/location">
					<li class="iconfont icon-zuobiao"></li>
					<span class="text">坐标:温州</span>
				</router-link>
			</div>
			<div class="age">
				<router-link class="lkv" to="/work">
					<li class="iconfont icon-gongzuojingli"></li>
					<span class="text">工作经历</span>
				</router-link>
			</div>
		</ul>
		<div class="content">
			<router-view class="" name="a"></router-view>
			<router-view class="" name="b"></router-view>
			<router-view class="" name="c"></router-view>
			<router-view class="" name="d"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';

	.about {
		display: flex;
		position: relative;
		width: 100%;
		height: 93vh;
		position: absolute;
		flex-direction: column;
		align-items: center;
		background-color: #F5F2F0;

		.Bout-me {
			margin-top: 30px;

			img {
				border-radius: 50%;
				border: 5px solid #F4F5F7;
				padding: 10px;
			}
		}

		.induct {
			margin-top: 20px;
			font-size: 25px;
		}

		.icon-item {
			display: flex;

			.iconfont {
				font-size: 55px;
				border: 5px solid $content-black;
				padding: 20px;
				border-radius: 50%;
				margin-bottom: 15px;
			}

			.age {
				text-align: center;
				margin: 40px 60px;

				.lkv {
					text-decoration: none;
					color: black;
				}
			}

			.text {
				font-size: 20px;
			}

		}

		.icon-item:hover {
			color: green;
		}

		.content {
	
		}


	}
</style>
