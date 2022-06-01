<template>
	<div class="blog-card-main" v-for="item in nearbyList" :key="item.id">
		<div class="blog-card-left">
			<div class="blog-card-main-title" @click="handleTopath()">
				{{item.title}}
			</div>
			<div class="blog-card-main-time">
				时间：{{item.time}}
			</div>
			<div class="blog-card-main-content">
				{{item.content}}
			</div>
			<div class="label">
				<span>标签</span>
				<span>{{item.author}}</span>
			</div>
		</div>
		<div class="blog-card-right">
			<div class="blog-card-img">
				<img :src="item.image">
			</div>
		</div>

	</div>
</template>

<script>
	import {
		get
	} from '../../utlis/request.js'
	import {
		ref
	} from 'vue'
	import {
		useRouter
	} from 'vue-router';
	export default {
		name: 'bigCard',
		setup() {
			const data = {
				title: 'uniapp适配微信小程序',
				time: '2022-03-21'
			}
			const nearbyList = ref([])
			const router = useRouter();
			const handleTopath = () => {
				router.push({
					name: 'blogs'
				})
			}
			const getBlogNews = async () => {
				const result = await get('/api/blog/Carousel')
				if (result.code === 1 && result.data.length) {
					nearbyList.value = result.data
					console.log(result.data)
				}
			}
			getBlogNews();
			return {
				// result,
				data,
				handleTopath,
				getBlogNews,
				nearbyList
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
		overflow: hidden;

		.blog-card-left {
			width: 450px;
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
			width: 540px;
			height: 400px;
			border: 1px solid rgba(179, 186, 197, 1);
			border-radius: 5px;

			.blog-card-img {
				width: 540px;
				height: 400px;


				img {
					width: 100%;
					height: 100%;
					border-radius: 5px;
				}
			}
		}

	}
</style>
