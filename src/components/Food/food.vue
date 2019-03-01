<template>
	<div class="food">
		<foodtopbar></foodtopbar>
		<foodinfo :datalist="FootInfoData" v-if="FootInfoData"></foodinfo>
		<foodpic :datalist="FootPicData"></foodpic>
	</div>
</template>
<script>
	import axios from 'axios'
	import foodtopbar from './foodtopbar.vue'
	import foodinfo from './foodinfo.vue'
	import foodpic from './foodpic.vue'
	import {mapState} from 'vuex'
	export default{
		data(){
			return{	
		
			}
		},
		components:{
			foodtopbar,
			foodinfo,
			foodpic
		},
		computed:{
			...mapState(['FootInfoData','FootPicData'])
		},
		mounted(){
			//商品数据
			this.$store.commit('setFootInfoData','')
			this.$store.commit('setFootPicData','')
			this.$store.dispatch('getFootInfoData',{
				city_id:this.$store.state.city_id,
				province_id:this.$store.state.province_id,
				id:this.$route.query.goodId
				})			
			//商品图片

			this.$store.dispatch('getFootPicData',{
				commonId:this.$route.query.commonId,
				goodId:this.$route.query.goodId
			})			
		}
	}
</script>
<style scoped lang="scss">
	
	.food{
		font-size: .12rem
	}
	
</style>