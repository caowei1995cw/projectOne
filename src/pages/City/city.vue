<template>
	<div class="all">
		<h2><span @click="goBack()"><</span>选择所在区域</h2>
		<ul>
			<li v-for="data in cityList" @click="setCity(data.city_id,data.city_name)">
				{{data.city_name}}
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
			
			}
		},
		computed:{
			...mapState(['cityList'])
		},
		beforeMount(){
			this.$store.dispatch('getCityData',{
				id:this.$route.query.id,
			})

		},
		methods:{
			setCity(city_id,cityName){
				this.$store.state.city_id=city_id
				this.$store.state.cityName=cityName
				
				this.$router.push('/home')
			},
			goBack(){
				this.$router.go(-1)
			}
		}
		
	}
</script>
<style type="text/css" media="screen" lang="scss" scoped>
.all{
	background:#fff;
	.top{
		height:50px
	}
}
	p{
		text-align:center;
	}
	.now{
		height: 40px;
		line-height: 40px;
		background:#ccc;
		font-size: 20px;
		text-align: left;
		text-indent: 20px
	}
	.click{
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color: #c2c2c2
	}
	.choice{
		text-align: left;
		text-indent: 20px;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		span{
			float:left;
			margin-left:20px;
			margin-right:30px;
			color:#c2c2c2
		}
	}
ul{
	margin-top: 50px;
	li{
		height:55px;
		line-height:55px;
		font-size:20px;
		margin-left:20px;
		font-weight:100
	}
}
h2{
	text-align:center;
	width:100%;
	height:50px;
	line-height:50px;
	font-size:30px;
	background:#fff;
	position:fixed;
	top:0;
	left:0;
	span{
		float:left;
		margin-left:20px
	}
}
</style>