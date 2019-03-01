<template>
	<div  class="foodinfo">				
				<div class="swiper-container">
				    <ul class="swiper-wrapper" >
					     <li class="swiper-slide" v-for="data , index in datalist.img_list" :key="data.goods_image_id">
					     	<img :src="data.goods_image" alt="">
					     </li>			   
				    </ul>
				    <!-- Add Pagination -->
				    <div class="swiper-pagination"></div>
				    <!-- Add Arrows -->
				    <div class="swiper-button-next"></div>
				    <div class="swiper-button-prev"></div>
				</div>	 
				<div class="shop_info clear" v-if="!(Object.keys(datalist).length===0)">
					<div class="prod-title clear">
						<span class="prod-tit-l" >{{datalist.goods_info.goods_name}}</span>
						<span class="prod-tit-r">
							<i>&lt&gt</i> 
							<span>二维码</span>
						</span>
					</div>
					<div class="prod-tit-des">{{datalist.goods_info.goods_jingle}}</div>
					<div class="prod-price">
						<span class="prod-money">{{datalist.goods_info.goods_price}}</span>
						<span class="ori-price">{{datalist.goods_info.goods_marketprice}}</span>
					</div>
					<div class="prod-freight">
						<span>运费：</span> 
						<span>{{datalist.goods_info.fare_title}}</span>
					</div>

						
				</div>
				<div class="prod-spec">
					<span class="spec-desc">请选择</span>
					 <div class="base-txt">闪银色 182升 </div>
					 <div class="part-note-msg">1个</div> 
					 <em class="icon-spot"></em>
				</div>

	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default{
		props:{
			datalist:Object
		},
		watch:{
			datalist(value){
				this.$nextTick(()=>{
					var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 1,
					      spaceBetween: 30,
					      loop: true,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					      navigation: {
					        nextEl: '.swiper-button-next',
					        prevEl: '.swiper-button-prev',
					      },
					    });
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
.foodinfo{
	margin-top: .45rem;
	.swiper-container{
		img{
			width: 100%;
		}
	}
	.shop_info{
		background-color: white;
		.prod-title {
		    margin: 0 .36rem 0 .2rem;
		    overflow: hidden;
		    .prod-tit-l {
		    	margin-top: .2rem;
		        width: 80%;
		        float: left;
		        line-height:.4rem;
		        height:.8rem;
		        font-size: .36rem;
		        span {
					
		            color: #252525;
		        }
		    }
		    .prod-tit-r {
		    	margin-top: .2rem;
		        float: right;
		        width: .8rem;
		        i {
		            width: .4rem;
		            height: .4rem;
		            display: block;
		            margin-left: .24rem;
		        }
		        span {
		            width: 100%;
		            display: block;
		            text-align: center;
		            font-size: .24rem;
		            color: #808080;
		            margin-top: .08rem;
		        }
		    }
		}
		.prod-tit-des {
		    display: block;
		    font-size: .36rem;
		    color: #808080;
		    margin-left:.18rem;
		    margin-top: .14rem;
		}
		.prod-price {
		    margin-left: .12rem;
		    padding-bottom: .14rem;
		    overflow: hidden;
		}
		.prod-price {
		    margin-left:.12rem;
		    padding-bottom: .14rem;
		    overflow: hidden;
		    .prod-money {
		        color: #ff7300;
		        font-size: .48rem;
		        float: left;
		        color: #ff4b4b;
		        margin-top: .18rem;
		    }
		    .ori-price {
		        float: left;
		        font-size: .24rem;
		        color: #808080;
		        margin-left: .12rem;
		        padding-top: .4rem;
		        text-decoration: line-through;
		    }
		}
		.prod-freight {
		    color: #808080;
		    font-size: .36rem;
		    padding-bottom: 1px;
		    margin-left: .09rem;
		}
		
	}
	.prod-spec {
		margin-top:.05rem;
		background-color: white;
	    height: .5rem;
	    margin-left: .09rem;
	    padding-right: .11rem;
	    line-height: .5rem;
	    font-size: .32rem;
	    overflow: hidden;
	    .spec-desc {

	        margin-right: .1rem;
	        float: left;
	        color: #808080;
	    }
	    .base-txt {
	        float: left;
	        color: #333;
	        width: 65%;
	        text-overflow: ellipsis;
	        white-space: nowrap;
	        overflow: hidden;
	    }
	    .part-note-msg {
	        float: left;
	        margin-left: 0.08rem;
	        color: #333;
	    }
	}
}
	
</style>