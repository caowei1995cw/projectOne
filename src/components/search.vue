<template>
	<div>
		<topbar></topbar>
		<ul>
			<li v-for="data in datalist" :key="data.goods_commonid" @click="tofood(data.goods_id,data.goods_commonid)">
				<dl class="clear">
					<dt>
						<img :src="data.goods_image">
					</dt>
					<dd>
						<h2 class="red" v-html="data.goods_name"></h2>
						<h3>
							￥{{data.goods_price}}
							<span>{{data.goods_salenum}}人付款</span>
						</h3>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
	import topbar from './topbar'
	import axios from 'axios'
	export default{
		data(){
			return {
				datalist:null
			}
		},
		components:{
			topbar
		},
		mounted(){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547206397075&act=goods&op=goodsList',`provinc=${this.$store.state.province_id}&city=${this.$store.state.city_id}&keyword=${this.$route.query.keyword}&page=1&coupon_id=&sorted=4&sequence=0&start_price=0&ent_price=0&goods_from=0&key=&store_id=`).then(res=>{
				console.log(res.data)
				this.datalist=res.data.datas.list
				console.log(this.datalist)
			})
		},
		methods:{
			tofood(goodId,commonId){
				this.$router.push({path:'/food',query:{goodId:goodId,commonId:commonId}})
				
			},
		}
	}
</script>
<style lang="scss" scoped>
	.red /deep/ i {
	font-style: normal;
	color:red;
	}
	ul{
		background-color: #f0f0f0;
		margin-top:1.7rem;
		li{
			border-top:4px solid #ccc;
			height: 2.74rem;
			
			dl{

				dt{
					height: 2.74rem;
					float: left;
					
					img{
						height: 100%;
						display: block;
					}
				}
				dd{
					height:2.74rem;
					width: 60%;
					float:left;
					padding: .2rem;
					box-sizing:border-box;	
					
					h2{
						width: 4rem;
						display: -webkit-box;
						-webkit-line-clamp:2;
						text-overflow: ellipsis;
						word-break: break-all;
						overflow:hidden;
						-webkit-box-orient:vertical;
						font-size: .4rem;
						height:1.2rem;
						line-height: .6rem;

					}
					h3{
						color: #f81234;
						font-size:.36rem;
						line-height: .4rem;
						height: .4rem;
						margin-top: .6rem;
						overflow: hidden;
						span{
							color: #808080;
							font-size: .28rem;
							float: right;
							width: 50%;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: right;
						}
					}
				}
			}
		}
	}
</style>