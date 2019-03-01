<template>
	<div v-show="datalist">
		<div class="all">
			<div class="cate">
				<p >
					热门推荐
				</p>
			</div>
			<div v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check = "false"
  infinite-scroll-distance="10" class="clear">
				<div v-for="data in datalist" :key="data.goods_id" class="drict" @click="toFood(data.goods_id)">
				<img :src="data.goods_image">
				<p class="goods_name">{{data.goods_name}}</p>
				<p class="red">{{data.goods_price}}元<span class="r">已售{{data.goods_salenum}}件</span></p>
			</div>
			</div>
			
		</div>
		
	</div>
</template>
<script>
	// import axios from "axios"
	import {getHotData} from "./moudle"
	import { InfiniteScroll } from 'mint-ui'
	export default{
		data(){
			return{
				datalist:null,
				page:1,
				loading:false,
				page_count:''
			}
		},
		beforeMount(){
			// axios.post(				
			// 	'/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547004026689&act=goods&op=goodsRecom_new','provinc=210&city=210200000000&page=1&pageSize=10'
			// ).then(res=>{
			// 	this.datalist=res.data.datas.list
			// })
			getHotData(this.$store.state.province_id,this.$store.state.city_id,this.page).then(res=>{
				this.datalist=res.datas.list
			})
		},
		methods:{
			toFood(id){
				this.$router.push({path:'/food',query:{
					goodId:id
				}})
			},
			loadMore(){
				if(this.page_count===0){
					this.loading=true
					return
				}
				console.log("到底了",this.page)		
				this.page++;
				getHotData(this.$store.state.province_id,this.$store.state.city_id,this.page).then(res=>{
				this.datalist=[...this.datalist,...res.datas.list]
				this.page_count=res.datas.page_count
			})
			}
		}
	}	
</script>
<style type="text/css" media="screen" lang="scss" scoped>
*{
	padding:0;
	margin:0;
	box-sizing:border-box;
}
.all{
		width:100%;
		.cate{
			p{
				background:#c2c2c2;
				height:.68rem;
				line-height:.68rem;
			}
		}
		.drict{
			width:50%;
			float:left;
			padding:.4rem;
			border:1px solid #aaa;
			img{
				width:100%;
				margin-bottom:.4rem
			};
			p{
				width:100%;
				font-size:.28rem;
				line-height:.36rem;
			};
			.goods_name{
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;
				overflow:hidden;
				text-overflow:ellipsis;
				word-break:break-all;
				height:.72rem;
				

			};
			.red{
				height:.36rem;
				color:red;
				.r{
					float:right;
					color:#ccc
				}

			}
		}
}



</style>