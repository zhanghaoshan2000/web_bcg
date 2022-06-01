<template>
	<div class="card">
		<Card v-for="item in showPage" :key="item.id" :item="item" />
	</div>
	<div class="card-blogs">
	</div>
	<div class="paging">
		<div class="pravPage" @click="prav">上一页</div>
		<div class="pages" v-for="item in conpages" :key="item.id" @click="page(item)" :class="item==cur?'active':''">
			{{item}}
		</div>
		<div class="nextPage" @click="next()">下一页</div>
	</div>
</template>

<script>
	// import Skeleton from '../../components/Skeleton/card.vue'
	import {
		get
	} from '../../utlis/request.js'
	import Card from '../../components/card/index.vue';
	export default {
		components: {
			// NavBar,
			Card,
			// Skeleton,
		},
		data() {
			return {
				conpages: '', //总页数
				cur: 1, //当前页
				pageSize: 6, //每页要展示数据条数
				showPage: [], //每页展示的内容
				lists: null,
				nearbyList: []
			}
		},
		mounted() {
			this.getBlogsList();
		},
		methods: {
			getBlogsList() {
				var that = this;
				var result = get('/api/blog/news')
				result.then(res => {
					// console.log(res.data);
					that.nearbyList.value = res.data;
					that.conpages = Math.ceil(that.nearbyList.value.length / this.pageSize);
					that.cur = 1;
					that.page(this.cur)
				})
			},
			page(item) {
				this.cur = item;
				var list = (this.cur - 1) * this.pageSize;
				// console.log("list", list, this.nearbyList.value);
				this.showPage = this.nearbyList.value.slice(list, list + this.pageSize);
				// console.log("showPage", this.showPage)
			},
			prav() {
				if (this.cur != 1) {
					this.cur--
					this.page(this.cur)
				}
			},
			next() {
				if (this.cur < this.conpages) {
					this.cur++
					this.page(this.cur)
				}
			}
		}
	}
</script>

<style lang="scss">
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
			cursor: pointer;
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
			cursor: pointer;
		}

		.active {
			background-color: #FFD2A4;
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
			cursor: pointer;
		}
	}
</style>
