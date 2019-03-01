<template>
	<div>
		<ul class="topbar" :class="isShow?'changeColor':''" >
			<router-link tag="li" class="city" to="/province">{{cityName}}&gt </router-link>
			
			<li class="need">
				<input type="text" name="" placeholder="搜索您需要的商品" @click="findsome()">
			</li>
		</ul>
		<div class="topboxes">
			<slider :sliderdata="datalist" class="slider"></slider>
			<detailList :detaillist="listdata" class="detailList"></detailList>
			<pic :piclist="picdata" ></pic>
			<six  :sixpiclist="sixpicdata" class="six"></six>
			<teseguan :tesepiclist="tesepicdata" class="teseguan"></teseguan>
		</div>
		<navcontent :navlist="navlistdata" :class="isFixed?'fixedheader':''"></navcontent>
		<category :categorylist="categorydata"></category>
		<hot ></hot>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import slider from './slider'
	import detailList from './detailList'
	import pic from './pic'
	import six from './six'
	import teseguan from './teseguan'
	import navcontent from './navcontent'
	import category from './category'
	import hot from './hot'
	import axios from "axios"
	import {getHomeData} from "./moudle"
	import {Indicator} from 'mint-ui'
	// import Swiper from 'swiper'
	// import "swiper/dist/css/swiper.css"
	export default{
		data(){
			return{
				page:1,
				isShow:false,
				isFixed:false,
				datalist:null,
				listdata:null,
				picdata:null,
				sixpicdata:null,
				tesepicdata:null,
				navlistdata:null,
				categorydata:null,
			}
		},
		computed:{
			...mapState(['cityName'])
		},
		components:{
			slider,
			detailList,
			pic,
			six,
			teseguan,
			navcontent,
			category,
			hot
		},
		beforeMount(){
			// axios.post(				
			// 	'/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546917532710&act=index&op=index&key=','province_id=210&city_id=210200000000&qiang_zhi_geng_xin='
			// 	// qs.stringify({
			// 	// 	province_id: 210,
			// 	// 	city_id: 210200000000,
			// 	// 	qiang_zhi_geng_xin:'', 
			// 	// })

			
			// )
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			getHomeData(this.$store.state.province_id,this.$store.state.city_id).then(res=>{
				this.datalist=res.datas.adv;
				this.listdata=res.datas.platform.list;
				this.picdata=res.datas.leaderboard
				this.sixpicdata=res.datas.le6ji
				this.tesepicdata=res.datas.feature
				this.navlistdata=res.datas.category
				this.categorydata=res.datas.category_goods
				
			})
			setTimeout(()=>{
				Indicator.close();
			},1000)
		},
		methods:{
			handleScroll(){
				
				var slider=document.querySelector(".slider");
				var topboxes=document.querySelector(".topboxes");
				;
				if(document.documentElement.scrollTop>=slider.offsetHeight && document.documentElement.scrollTop<topboxes.offsetHeight){
					this.isShow = true;
					this.isFixed = false
					
				}else if (document.documentElement.scrollTop>=topboxes.offsetHeight){
					this.isFixed = true;
					

				}else{
					//隐藏header
					this.isShow= false;
					this.isFixed = false
					
				}
			},
			findsome(){
				console.log("1234")
				this.$store.state.isShow=!this.$store.state.isShow
			}
		},
			

		mounted(){
			

			window.onscroll = this.handleScroll
		},
		destroyed(){
			window.onscroll=null
		}

		
		
	}
</script>
<style type="text/css" media="screen" lang="scss" scoped>
.topbar{
	z-index:999;
	width:100%;
	display:flex;
	height:.8rem;
	line-height:.8rem;
	position:fixed;
	top:0;
	left:0;
	.city{
		width:1.6rem;
		margin-left:.2rem;
		font-size:.3rem

	};
	.need{
		flex:1;
		font-size:.28rem;
		input{
			width:95%;
			height:.6rem;
			line-height:.6rem;
			border-radius:.3rem;
			text-indent:.6rem;
			color:#c2c2c2;
			
		}
	}
}
.changeColor{
	background:red;
	color:#fff
}
.fixedheader{
	width:100%;
	position:fixed;
	left:0;
	top:.8rem;

}
</style>