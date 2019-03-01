<template>
	<div>

		<ul>
			<li v-for="data in categorylist" :key="data.gc_id" >
				<div class="cate" :id="`a${data.cate_info.gc_id}`">
					<img :src="data.cate_info.cate_image">
					
					<p>
						{{data.cate_info.cate_name}}
						<a @click="toFoodlist(data.cate_info.gc_id)">更多 ></a>
					</p>
					
				</div>
				<div v-for="data1 in data.goods_list" :key="data1.goods_id" class="drict" @click="toFood(data1.goods_id)">
					<img :src="data1.goods_image">
					<p class="goods_name">{{data1.goods_name}}</p>
					<p class="red">{{data1.goods_price}}元<span class="r">已售{{data1.goods_salenum}}件</span></p>
				</div>
			</li>
		</ul>
	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			categorylist:Array,
		},
		methods:{
			toFood(id){
				this.$router.push({path:'/food',query:{
					goodId:id
				}})
			},
			toFoodlist(id){
				this.$router.push({path:'/foodlist',query:{
					id:id
				}})
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
ul{
	width:100%;
	li{
		width:100%;
		overflow:hidden;
		.cate{
			width:100%;
			height:34px;
			background:#c2c2c2;
			display:inline-block;
			img{
				height:100%;
				float:left
			}
			p{
				height:.68rem;
				line-height:.68rem;
				font-size:.36rem;
				a{
					float:right
				}	
			}
			
		};
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
}


</style>