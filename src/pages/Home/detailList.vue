<template>
	<div>
			<div class="swiper-container swiper-container1">
				<ul class="swiper-wrapper">
					<li v-for="data in detaillist"  class="swiper-slide">
						<img :src="data.cate_image">
						<p>{{data.cate_name}}</p>
					</li>
				</ul>
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
			detaillist:Array
		},
		watch:{
			detaillist(value){
				this.$nextTick(()=>{
					var swiper1 = new Swiper('.swiper-container1', {
					     slidesPerView: 4.5,
					     spaceBetween: 0,
					     freeMode: true
					    
					   });
					})
				
			}
		}
	}
</script>
<style type="text/css" media="screen" lang="scss" scoped>
ul{
	
	width:100%;
	display:flex;
	// overflow-x: scroll;
	// white-space:nowrap;
	;
	li{
		height:100%;
	
		background:#fff;
		
		img{
			width:50%;
			display:block;
			margin:0 auto;
			margin-top:.28rem;
			margin-bottom:.14rem;
		};
		p{
			width:100px;
			text-align:center;
			font-size:.36rem
		}
	}
}	
</style>