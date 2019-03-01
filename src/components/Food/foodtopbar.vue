<template>
	<div class="foodtopbar" id="top">
		<div class="hd_nav">
			<div class="toback" @click="toback()">&lt</div>
			<dl class="x-menu-tab">
				<dd class="x-cur">
					<a href="javascript:;" v-anchor="'#top'" >商品</a>
				</dd> 
				<dd>
					<a href="javascript:;" v-anchor="'#detail'" >详情</a>
				</dd> 
				<dd>
					<a href="javascript:;">推荐</a>
				</dd> 
				<dd >
					<a href="javascript:;">营业执照</a>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			toback(){
				this.$router.go(-1)
			}
		},
		directives:{
			anchor:{
				inserted(el,binding){
					el.onclick = function(){
					    document.documentElement.scrollTop =(document.querySelector(''+binding.value).offsetTop)-45					
					}
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
	.foodtopbar{		
		.hd_nav {
		    width: 100%;
		    border-bottom: 1px solid #d8d8d8;
		    height: 45px;
		    background-color: #fff;
		    position: fixed;
		    z-index: 100;
		    left:0;
		    top:0;
			.toback{
				position: absolute;
				top:12px;
				left:12px;
				font-size: 18px;
			}
		    .x-menu-tab {
		        display: flex;
		        height: 45px;
		        flex-flow: row nowrap;
		        justify-content: space-between;
		        width: 70%;
		        margin: 0 auto;
		        dd {
		            height: 44px;
		            line-height: 44px;
		            font-size: 14px;
		            width: 120px;
		            border-bottom: 1px solid #fff;
		            text-align: center;
		        }
		    }
		}
	}	
</style>