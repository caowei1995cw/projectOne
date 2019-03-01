<template>
	<div class="search">
		<input type="text" name="" placeholder="输入商品名称" @click="tosearch()"> 
		<span>取消</span>
	</div>
</template>
<script>
	export default {
		methods:{
			tosearch(){
				this.$store.state.isShow=!this.$store.state.isShow
				this.$router.push('/home')
			}
		}
	}
</script>
<style scoped lang="scss">
	.search{
		height: 1.2rem;
		padding: 0 .3rem;
		line-height: 1.2rem;
		border-bottom: 1px solid #ccc;
		font-size: .36rem;
		input{
			background-color: #f2f2f2;
			text-indent: .4rem;
			width:5.6rem;
			margin: auto;
			outline: none;
			border:1px solid #f2f2f2;
			border-radius: .6rem;
			height:.6rem;
		}
		span{
			width: .6rem;
		}
	}
</style>