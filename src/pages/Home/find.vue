<template>
	<div class="all">
		<ul class="top">
			<li class="l" @click="goback()">X</li>
			<li class="findsome">
				<span>商品V</span>
				<input type="text" name="" placeholder="输入商品名称" v-model="keyword">
			</li>
			<li class="r" @click="find()">搜索</li>
		</ul>
		<p><span>HOT</span>热门搜索</p>
		<ul class="list">
			<li v-for="data in listdata">
				{{data}}
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from "axios"
	
	export default{
		data(){
			return{
				listdata:null,
				keyword:''
			}
		},
		beforeMount(){
				axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547123185142&act=goods&op=hotWord',`api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547123185142&act=goods&op=hotWord`
			).then(res=>{
				this.listdata = res.data.datas.list
			})
		},
		methods:{
			goback(){
				
				this.$store.state.isShow=!this.$store.state.isShow
			},
			find(){
				
				this.$store.state.isShow=!this.$store.state.isShow
				this.$router.push({path:'/search',query:{keyword:this.keyword}})
			}
		}
		
		
	}	
</script>
<style type="text/css" media="screen" lang="scss" scoped>
.all{
	

	.top{
		display:flex;
		width:100%;
		height:.9rem;
		line-height:.9rem;
		
		li{
			width:.8rem;
			font-size:.36rem;
		}
		.findsome{
			flex:1;
			display:flex;
			font-size:.4rem;
			border-radius:.4rem;
			border-radius:20px;
			background-color:white;
			overflow:hidden;
			span{
				margin-left:.2rem;
				
				flex:1;
			};
			input{
				// height:.6rem;
				// line-height:.6rem;
				border-left:1px solid #ccc;

				text-indent:.4rem;
				// font-size:.4rem;
				flex:1;
				width:4.5rem
			}
		}
		
	}
	p{
		height:1.2rem;
		line-height:1.2rem;
		font-size:.5rem;
		span{
			color:red;
			margin-left:.2rem
		}
	};
	.list{
			
			width:100%;
			li{
				height:.8rem;
				line-height:.8rem;
				width:16%;
				float:left;
				text-align:center;
				border:1px solid #000;
				border-radius:.4rem;
				margin:.1rem;
				font-size:.36rem;

			}
	}
}




</style>