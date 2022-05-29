<template>
	<div class="Home">
		<div class="content">
			<div class="blog-title">
				问题总结
			</div>
			<bigCard />
			<!-- 卡片 -->
			<div class="card">
				<Card v-for="item in showPage" :key="item.id" :item="item" />
			</div>
			<div class="card-blogs">
			</div>
			<div class="paging">
				<div class="pravPage" @click="prav">上一页</div>
				<div class="pages" v-for="item in conpages" :key="item.id" @click="page(item)"
				:class="item==cur?'active':''">
					{{item}}
				</div>
				<div class="nextPage" @click="next()">下一页</div>
			</div>
		</div>
		<tabbar />
	</div>
</template>

<script>
	import {ref} from 'vue'
	import {get} from '../../utlis/request.js'
	import Card from '../../components/card/index.vue';
	import bigCard from './bigCard.vue';
	import tabbar from './tarbar.vue';
	export default {
		components: {
			// NavBar,
			Card,
			bigCard,
			tabbar
		},
		data() {
			return {
				conpages: '', //总页数
				cur: 1, //当前页
				pageSize:6, //每页要展示数据条数
				showPage: [], //每页展示的内容
			}
		},
		setup() {
			const data = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]
			const nearbyList = ref([]);
			const getBlogsList = async () =>{
				const result = await get('/api/blog/news')
				if(result?.code===1 &&result?.data?.length){
					nearbyList.value = result.data;
					console.log(result.data.length)
				}
				
			}
			getBlogsList();
			return {
				data,
				nearbyList,
			}
		},
		created() {
			this.conpages = Math.ceil(20 / this.pageSize)
			this.page(this.cur)
		},
		methods: {
			page(item) {
				this.cur = item;
				var list = (this.cur - 1) *this.pageSize;
				this.showPage = this.nearbyList.slice(list,list+this.pageSize);
			},
			prav(){
				if(this.cur !=1){
					this.cur--
					this.page(this.cur)
				}
			},
			next(){
				if(this.cur<this.conpages){
					this.cur++
					this.page(this.cur)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';

	.Home {
		background-color: rgb(244, 245, 247);
		height: 1976px;
		box-sizing: border-box;
		position: relative;
		
		.content {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;

			.blog-title {
				width: 100%;
				text-align: center;
				margin-top: 54px;
				margin-bottom: 54px;
				font-size: 56px;
			}

			.card {
				display: flex;
				width: 1120px;
				justify-content: space-between;
				height: 930px;
				flex-wrap: wrap;
			}

			.paging {
				display: flex;
				font-size: 20px;
				font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
				width: 100%;
				padding: 5px;
				margin-top: 20px;
				justify-content: center;
				box-sizing: border-box;

				.pravPage {
					margin-right: 20px;
					color: #fff;
					padding: 5px;
					text-align: center;
					line-height: 30px;
					border-radius: 5px;
					font-weight: 600;
					background-color: #0D0D0D;
					cursor:pointer;
				}

				.pages {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 30px;
					height: 30px;
					padding: 5px;
					background-color: #0D0D0D;
					color: #fff;
					border-radius: 5px;
					margin: 0 5px;
					font-weight: 600;
					cursor:pointer;
				}
				.active{
					background-color:#FFD2A4;
				}

				.nextPage {
					margin-left: 20px;
					color: #fff;
					height: 30px;
					padding: 5px;
					text-align: center;
					line-height: 30px;
					border-radius: 5px;
					background-color: #0D0D0D;
					font-weight: 600;
					cursor:pointer;
				}
			}
		}

	}
</style>
