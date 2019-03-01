<template>
	<div class="all">
		<h2><span @click="goBack()"><</span>选择所在区域</h2>
		<div class="top"></div>
		<p class="now">当前位置：</p>
		<p class="click">点击定位当前位置</p>
		<p class="choice"><span>请选择</span>省份/地区</p>
		<ul>
			<li v-for="data in provinceList" @click="findCity(data.province_id)">
				{{data.province_name}}
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
			...mapState(['provinceList'])
		},
		beforeMount(){
			this.$store.dispatch('getProvinceData')
		},
		methods:{
			findCity(province_id){
				this.$store.state.province_id=province_id
				this.$router.push({
				          path:'/city',
				          query: {
				            id:province_id,
				          }
				})
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