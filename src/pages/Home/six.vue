<template>
	<div>
		
		
		<div class="tese" v-if="sixpiclist">
			<p>乐6集</p>
			<img :src="sixpiclist.le6ji_img">
			<div class="swiper-container swiper-container5">
				<ul class="more clear swiper-wrapper">
					<li v-for="data in sixpiclist.recommend_goods" class="swiper-slide" @click="toFood(data.goods_id)">
						<img :src="data.goods_image">
						<p class="goodName">{{data.goods_name}}</p>
						<p class="price">￥{{data.goods_price}}</p>
					</li>
					<li class="seemore">
						<div>
							<p>查看更多</p>
							<p>see more</p>
						</div>
					</li>
					
				</ul>
			</div>
			
			
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import "swiper/dist/css/swiper.css"
	export default{
		data(){
			return{
				
			}
		},
		props:{
			sixlist:Array,
			sixpiclist:Object,

		},
		watch:{
			sixpiclist(value){
				this.$nextTick(()=>{
					var swiper5 = new Swiper('.swiper-container5', {
					     slidesPerView: 3.5,
					     spaceBetween: 0,
					     freeMode: true
					    
					   });
					})
			}
		},
		methods:{
			toFood(id){
				this.$router.push({path:'/food',query:{
					goodId:id
				}})
			}
		}
	}
</script>
<style type="text/css" media="screen" lang="scss" scoped>
.tese{
	width:100%;
	
	p{
		text-align:center;
		height:36px;
		line-height:36px;
		font-size:.36rem;
	}
	img{
		width:100%;
	};
	.more{
		width:100%;
		display:flex;
		li{
			width:25%;
			margin-right:10px;
			height:100%;
			// float:left;
			img{
				width:100%
			};
			.goodName{
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;
				overflow:hidden;
				text-overflow:ellipsis;
				word-break:break-all;
				font-size:.28rem;
				height:.8rem;
				line-height:.4rem
			};
			.price{
				color:red
			}
		};
		.seemore{
			height:3.6rem;
			background:#ccc;
			position:relative;
			div{
				width:100%;
				position:absolute;
			
				top:50%;
				transform:translate(0,-50%);
				overflow:hidden;
				p{
					font-size:.28rem
				}
			}
		};
	}
}

</style>