<template>
	<div class="travel">
		<div class="travel-content">
			<span class="img" v-for="item in nearbyList" :key="item.id">
				<img :src="item.image" />
				<div class="title">
					<div class="title-content">
						{{item.title}}
					</div>
					<div class="main">
						{{item.content}}
					</div>
				</div>
			</span>
		</div>
	</div>
	<paging />
</template>

<script>
	import {
		get
	} from '../../../utlis/request.js';
	import paging from '../../../components/paging/index.vue';
	import {
		ref
	} from 'vue'
	export default {
		components: {
			paging
		},
		setup() {
			const data = [1, 2, 3, 4, 5, 6]
			const nearbyList = ref([])
			const getBlogCollage = async () => {
				const result = await get('/api/blog/things')
				if (result.code === 1 && result.data.length) {
					nearbyList.value = result.data
					console.log(result.data)
				}
			}
			getBlogCollage();
			return {
				data,
				nearbyList,
				getBlogCollage
			}

		}
	}
</script>

<style lang="scss" scoped>
	.travel {
		display: flex;
		width: 100%;
		border-top: 20px solid #F0EEEE;

		// background-color:#F0EEEE;
		.travel-content {

			display: flex;
			flex-wrap: wrap;
			padding: 0 160px;

			.img {
				width: 540px;
				height: 400px;
				background-color: pink;
				margin: 20px 20px;
				border-radius: 10px;
				position: relative;
				overflow: hidden;

				// bottom: 20px;
				.title {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 420px;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.5);
					margin-left: 50px;
					height: 200px;
					position: absolute;
					font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
					bottom: -110px;
					border-radius: 5px;
					transition: all .3s;
					overflow: hidden;
					padding: 20px;

					.title-content {
						font-size: 30px;
						font-weight: 600;
						letter-spacing: 5px;
					}

					.main {
						margin-top: 10px;
						font-size: 16px;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden; //溢出内容隐藏
						text-overflow: ellipsis; //文本溢出部分用省略号表示
						display: -webkit-box; //特别显示模式
						-webkit-line-clamp: 5; //行数
						line-clamp: 5;
						-webkit-box-orient: vertical; //盒子中内容竖直排列		

					}

					&:hover {
						bottom: 20px;
					}
				}

			}

		}
	}
</style>
