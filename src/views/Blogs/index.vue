<template>
	<div class="blogs">
		<div class="banner" v-for="item in nearbyList" :key="item.id">
			<!-- {{item.id}} -->
		</div>
		<div class="content" v-for="item in nearbyList" :key="item.id">
			<div class="content-title">
				<div class="title">
					{{item.id}}--{{item.title}}
				</div>
				<div class="time">
					{{item.time}}
				</div>
			</div>
			<div class="content-main">
				<div class="contentx">
					<div class="img">
						<img :src="item.image" />
					</div>
					<p>{{item.content}}</p>
				</div>
				<div class="author">
					作者:{{item.author}}
				</div>
			</div>
		</div>
	</div>
</template>
<!-- v-for="item in nearbyList" :key="item.id" -->
<script>
	import {
		useRoute
	} from 'vue-router';
	import {
		ref
	} from 'vue'
	import {
		get
	} from '../../utlis/request.js'
	export default {
		name: 'blogs',
		setup() {
			const nearbyList = ref([])
			const route = useRoute()
			const getBlogId = async () => {
				const result = await get(`/api/blog/list?id=${route.query.id}`, {}) 
					nearbyList.value = result
					console.log('xxx', result.data.id)
					console.log('x', result.data)
				}
			getBlogId()
			return {
				getBlogId,
				route,
				nearbyList
			}
		}
	}
</script>

<style lang="scss">
	.blogs {
		display: flex;
		justify-content: center;
		// margin-top: 30px;
		flex-direction: column;
		align-items: center;
		background-color: #F7F7F7;
		width: 100%;
		min-height: 100vh;
		max-height: auto;

		.banner {
			width: 100%;
			height: 250px;
			background-color: cadetblue;
			margin-bottom: 30px;
		}

		.content {
			display: flex;
			flex-direction: column;
			width: 1600px;
			height: auto;
			background-color: #fff;
			box-sizing: border-box;
			padding: 30px;

			.content-title {
				display: flex;
				justify-content: space-between;
				border-bottom: 5px solid #F4E5D2;
				width: 100%;
				height: 70px;

				.title {
					font-size: 25px;
					font-weight: 600;
					line-height: 70px;
					margin-left: 50px;
				}

				.time {
					font-size: 16px;
					line-height: 70px;
					margin-right: 50px;
					color: #C0C0C0;
				}
			}

			.content-main {
				display: flex;
				flex-direction: column;

				.contentx {
					width: 100%;
					margin-top: 20px;
					min-height: 600px;
					max-height: auto;
					font-size: 20px;
					color: gray;

					.img {
						width: 200px;
						height: 200px;
						float: left;
						margin: 30px;

						img {
							width: 100%;
							height: 100%;
						}
					}

					p {
						letter-spacing: 2px;
						font: 20px Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
					}
				}

				.author {
					border-top: 5px solid #F4E5D2;
					margin-top: 20px;
					width: 100%;
					height: 70px;
					line-height: 70px;
					padding: 0 20px;
					box-sizing: border-box;
					font-size: 18px;
					font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
				}
			}
		}
	}
</style>
