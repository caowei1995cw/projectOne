<template>
	<div class="footbar">
		<ul>
			<router-link tag="li" to="/home" activeClass="cursor">
				<i class="iconfont icon-fonts-shouye"></i>首页
			</router-link>
			<router-link tag="li" to="/list" activeClass="cursor">
				<i class="iconfont icon-classify"></i>分类
			</router-link>
			<router-link tag="li" to="/shopcar" activeClass="cursor">
				<i class="iconfont icon-gouwuche"></i>购物车
			</router-link>
			<router-link tag="li" to="/msite" activeClass="cursor">
				<i class="iconfont icon-wo_de2"></i>我的
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
}
</script>
<style lang="scss" scoped>
	.footbar{
		font-size: .36rem;
		background-color: white;
		position: fixed;
		bottom:0;
		left:0;
		width: 100%;
		z-index: 1234567;
		ul{
			display: flex;
			height: 50px;
			.cursor{
					color:red;
				}
			li{
				flex:1;
				margin: auto;
				text-align: center;

				i{
					display:block;
					font-weight: bold;
					font-size: 20px;
					margin-bottom: 2px;

				}
			}
		}
	}
</style>