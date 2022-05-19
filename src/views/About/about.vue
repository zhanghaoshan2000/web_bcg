<template>
	<div class="about">
		<div class="Bout-me">
			<img src="../../assets/image/face-male-1.jpg">
		</div>
		<span class="induct">关于我</span>
		<ul class="icon-item">
			<div class="age">
				<li class="iconfont icon-nianling"></li>
				<span class="text">年龄</span>
			</div>
			<div class="age">
				<li class="iconfont icon-w_xuewei-"></li>
				<span class="text">学历</span>
			</div>
			<div class="age">
				<li class="iconfont icon-zuobiao"></li>
				<span class="text">坐标</span>
			</div>
			<div class="age">
				<li class="iconfont icon-gongzuojingli"></li>
				<span class="text">工作经历</span>
			</div>
		</ul>
		<div class="content">
			撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大
			撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大
			撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大
			撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大撒澳城大
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
		height: 94vh;
		position: absolute;
		flex-direction: column;
		align-items: center;

		.Bout-me {
			margin-top: 120px;

			img {
				border-radius: 50%;
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
				border: 1px solid rgba(0, 0, 0, 1);
				padding: 20px;
				border-radius: 50%;
				margin-bottom: 15px;
			}

			.age {
				text-align: center;
				margin: 40px 60px;
			}
			.text{
				font-size: 20px;
			}
		}
		.content{
			width: 900px;
			font-size: 18px;
			letter-spacing: 3px;
		}


	}
</style>
