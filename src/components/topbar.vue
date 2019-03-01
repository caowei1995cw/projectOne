<template>
	<div class="topbar">
		<div class="top">
			<div class="icon" @click="ToBack()"><</div>
			<div class="type">{{$route.query.name}}</div>
		</div>
		<ul class="bottom">
			<li>全部</li>
			<li>销量优先</li>
			<li>价格</li>
			<li>人气</li>
		</ul>
	</div>
</template>
<script>
	export default{
		methods:{
			ToBack(){
				this.$router.go(-1);
			}
		},
		props:{

		}
	}
</script>
<style lang="scss" scoped>
	.topbar{
		
		position: fixed;
		top:0;
		left:0;
		background-color: white;
		width: 100%;
		font-size:.36rem;
		.top{
			display: flex;
			text-align: center;
			height: 1.04rem;
			line-height: 1.04rem;
			position: relative;
			.icon{
				width: .8rem;
				padding-left:.1rem; 
				font-size: .6rem;
				color:#b2b2b2;
				position: absolute;
				top:0px;
				left:0px;
			}
			.type{
				flex:1;
				font-size: .36rem;
			}
		}
		ul.bottom{
			display: flex;
			text-align: center;
			height:.66rem;
			line-height:.66rem;
			li{
				flex:1
			}
		}
	}
</style>