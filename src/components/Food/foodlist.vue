<template>
	<div class="all">
		<topbar ></topbar>
		<ul class="foodlist clear" 
		   v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check = "false"
  infinite-scroll-distance="10" v-show="FoodList" >
			<li v-for="data,index in FoodList" @click="handleClick(data.goods_id,data.goods_commonid)">
				<dl>
					<dt>
						<img :src="data.goods_image" alt="">
					</dt>
					<dd >
						<span class="msg_des ">{{data.goods_name}}</span>
						<div class="clear">
							<span class="price_actual ">￥{{data.goods_price}}</span>
							<span class="msg_amount">{{data.goods_salenum}}人付款</span>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
	import topbar from '../topbar'
	import axios from 'axios'
	import {mapState} from 'vuex'
	import { InfiniteScroll } from 'mint-ui'

	export default{
		data(){
			return {
				page:1,
				loading:false,
			}
		},
		computed:{
			...mapState(['FoodList','province_id','city_id'])
		},
	
		mounted(){
			this.$store.state.FoodList=''
			this.$store.dispatch('getFoodList',{
				id:this.$route.query.id,
				province_id:this.$store.state.province_id,
				city_id:this.$store.state.city_id,
				page:this.page

			})
			
			
		},
		components:{
			topbar
		},
		methods:{
			handleClick(goodId,commonId){
				this.$router.push({path:'/food',query:{goodId:goodId,commonId:commonId}})
				
			},
			loadMore(){	
				console.log("到底了",this.page)		
				this.page++;
				this.$store.dispatch('getFoodList',{
					id:this.$route.query.id,
					province_id:this.$store.state.province_id,
					city_id:this.$store.state.city_id,
					page:this.page
				})

				// axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546944078688&act=goods&op=goodsList',`provinc=${this.$store.state.province_id}&city=${this.$store.state.city_id}&keyword=&page=${this.page}&sorted=4&sequence=0&gcId=${this.$route.query.id}&workshop=`).then(res=>{
				// 	// console.log(res.data.datas);
				// 	var data=	res.data.datas.list			
				// 	this.$store.state.FoodList=[...this.$store.state.FoodList,...data]
				// })
			}
		}
	}
</script>
<style lang="scss" scoped>
	.all{
		// overflow:auto;

	}
	ul{
		// display: flex;
		// background-color:#ccc;
		// overflow-y:auto;
		// overflow-x:none;
		font-size:.24rem;
		margin-top:1.76rem;
		li{
			width:48%;
			float: left;
		    background:white;
		    margin-top: 1.5%;
		    margin-right: 1%;
		    margin-left: 1%;
		   
			dl{
				dt{
					img{
						width: 100%;
					}
				}
				dd{
					width:95%;
					margin:0 auto;
					span.msg_des{
						width:90%;
						height:1rem;
						line-height: .5rem;
						overflow: hidden;
						display:-webkit-box;
						word-break: break-all;
						text-overflow: ellipsis;
					   -webkit-box-orient:vertical;//
					   -webkit-line-clamp:2;
					   font-size:.28rem;
					}
					div{
						span.msg_amount{
							padding-right:.24rem;
							font-size:.28rem;
							color: #999;
							float: right;
							margin-top: .08rem;
						}
						
						span.price_actual{
							    color: #f81234;
							    font-size: .36rem;
							    float: left;
						}
					}
				}
			}
		}
	}
</style>