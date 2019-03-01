<template>
	<div>
		
		<div class="swiper-container swiper-container2" >
			<ul class="swiper-wrapper ">
				<li  v-for="data in sliderdata" :key="data.adv_id" class="swiper-slide">
					<img :src="data.adv_image" class="picone">
				</li>
			</ul>
			<div class="swiper-pagination "></div>
		</div>
	</div>
</template>
<script>
	
	import Swiper from 'swiper'
	import "swiper/dist/css/swiper.css"
	export default{
		data(){
			return{
				// sliderdata:null
			}
		},
		props:{
			sliderdata:Array
		},
		watch:{
			sliderdata(value){
				this.$nextTick(()=>{
						var swiper2 = new Swiper('.swiper-container2', {
						    pagination: {
						      el: '.swiper-pagination',
						    },
						  });
					})
				
			}
		}
		
	}	
</script>
<style type="text/css" media="screen" lang="scss" scoped>

.picone{
	width:100%;
	
}
</style>