<template>
	<div class="all clear">
		<ul class="sidebar" v-if="sidebarLeftData">
			<li v-for="data ,index in sidebarLeftData" :key="data.gc_id" :class="currentindex===index?'focus':''" @click="handleClick(index,data.gc_id)">{{data.gc_name}}</li>
		</ul>
		<ul	class="content clear">
			<li v-for="data ,index in sidebarRightData" :key="data.gc_id" @click="toFoodList(data.gc_id,data.gc_name)">
				<dl>
					<dt><img :src="data.cate_img"alt=""></dt>
					<dd>{{data.gc_name}}</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				currentindex:0,
			}
		},
		computed:{
			...mapState(['sidebarLeftData','sidebarRightData'])
		},
		mounted(){
			//取得左侧标题数据
			this.$store.dispatch('getSidebarLeftData')
			//刚进入就默认请求一次右侧列表数据
			this.$store.dispatch('getSidebarRightData',256)

		},
		methods:{
			handleClick(index,id){
				//点击显示不同样式
				this.currentindex=index;
				
				//获取右侧列表数据
				this.$store.dispatch('getSidebarRightData',id)				
			},
			toFoodList(id,name){
				this.$router.push({path:'/foodlist',query:{id:id,name:name}})
			}
		}
	}
</script>
<style scoped lang="scss">
	.all{
		height:100%;
		background-color: white;
		font-size: .36rem;
	}
	.sidebar{
		float:left;
		width:1.76rem;
		text-align: center;
		background-color: #f0f0f0;
		li{
			height:.9rem; 
			line-height:.9rem;
			font-size: .36rem;
		}
	}
	.focus{
		color:#fa566e;
		background-color:white;
	}
	.content{
		
		overflow: auto;		
		text-align: center;
		li{
			width:33%;
			float: left;
			dt{
				img{
					width:100%;
				}
			}
		}
	}
</style>