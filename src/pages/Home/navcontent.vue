<template>
	<div>
		<div class="swiper-container swiper-container3">
			<ul class="swiper-wrapper">
				<li v-for="data in navlist" class="swiper-slide" >
						<a href="javascript:;" v-anchor="{id:`#a${data.gc_id}`,color:data.cate_color}">
							<img :src="data.cate_image">
							{{data.cate_name}}
						</a>
					
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
			navlist:Array,
		},
		watch:{
			navlist(value){
				this.$nextTick(()=>{
					var swiper3 = new Swiper('.swiper-container3', {
					     slidesPerView:5,
					     spaceBetween: 0,
					     freeMode: true
					    
					   });
					})
				
			}
		},
		directives:{
			anchor:{
				inserted(el,binding){
					el.onclick = function(){
					    document.documentElement.scrollTop =(document.querySelector(''+binding.value.id).offsetTop)
											
					}
					// window.onscroll=function(){
					// 	if(document.documentElement.scrollTop===((document.querySelector(''+binding.value.id)).offsetTop)){
					// 		el.style.backgroundColor=binding.value.color
					// 	}	
					// }
					
					// document.documentElement.scrollTop=el.clentY

				}

			}
		}
		
		
	}	
</script>
<style type="text/css" media="screen" lang="scss" scoped>
ul{
	
	width:100%;
	background:#fff;

	li{
		flex:1;
		margin:.2rem auto;
		font-size:.28rem;
		border-radius:.2rem;
		a{
			display:block;
			text-align:center;
			img{
				display:inline-block;
				height:50%;
			}
		}
	}
}


</style>