<template>
	<div class="blog-card-main">
		<div class="blog-card-left">
			<div class="blog-card-main-title" @click="handleTopath()">
				{{data.title}}
			</div>
			<div class="blog-card-main-time">
				时间：{{data.time}}
			</div>
			<div class="blog-card-main-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
				dolor in reprehenderit in voluptate velit esse cillum.
			</div>
			<div class="label">
				<span>标签</span>
				<span>sample tag</span>
				<span>sample tag</span>
				<span>sample tag</span>
			</div>
		</div>
		<div class="blog-card-right">
			<div class="blog-card-img">
			</div>
		</div>

	</div>
</template>

<script>
	import {
		useRouter
	} from 'vue-router';
	// const userRouterEffert = () => {
	// 	const router = useRouter();
	// 	const handleTopath = () => {
	// 		router.push({
	// 			name: 'blogs'
	// 		})
	// 	}
	// 	return {
	// 		handleTopath
	// 	}
	// }
	export default {
		name: 'bigCard',
		setup() {
			const data = {
				title: 'uniapp适配微信小程序',
				time: '2022-03-21'
			}
			// const {
			// 	handleToLogin
			// } = userRouterEffert()
			const router = useRouter();
			const handleTopath = () => {
				router.push({
					name: 'blogs'
				})
			}
			return {
				data,
				handleTopath
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/base.scss';

	.blog-card-main {
		display: flex;
		align-items: center;
		left: 160px;
		top: 296px;
		width: 1120px;
		height: 460px;
		box-sizing: border-box;
		background: rgba(235, 236, 240, 1);
		padding: 40px;
		justify-content: space-between;
		margin-bottom: 80px;

		.blog-card-left {
			width: 495px;
			height: 380px;

			.blog-card-main-title {
				font-size: 32px;

				&:hover {
					color: red;
					transition: all 0.5s;
				}
			}

			.blog-card-main-time {
				margin-top: 16px;
				margin-bottom: 24px;
				color: rgba(56, 59, 65, 1);
				letter-spacing: 0.2px;
				font-size: 12px;
			}

			.blog-card-main-content {
				color: rgba(56, 59, 65, 1);
				font-size: 16px;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 10; //行数
				line-clamp: 10;
				-webkit-box-orient: vertical; //盒子中内容竖直排列		
			}

			.label {
				margin-top: 28px;
				display: flex;
				color: rgba(56, 59, 65, 1);
				letter-spacing: 0.2px;
				font-size: 12px;

				span {
					margin-right: 25px;
				}
			}
		}

		.blog-card-right {
			width: 504px;
			height: 380px;
			border: 1px solid rgba(179, 186, 197, 1);
		}

	}
</style>
