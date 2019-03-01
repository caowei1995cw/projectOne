import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		province_id:140,
		city_id:140100000000,
		cityName:'选择城市',
		// page:1,
		provinceList:[],
		cityList:[],
		sidebarLeftData:[],
		sidebarRightData:[],
		FoodList:[],
		FootInfoData:{},
		FootPicData:{},
		isShow:true
	},
	mutations:{
		//设置列表左侧数据
		setSidebarLeftData(state,data){
			this.state.sidebarLeftData=data
		},
		//设置列表右侧数据
		setSidebarRightData(state,data){
			this.state.sidebarRightData=data
		},
		//设置商品列表
		setFoodList(state,data){
			this.state.FoodList=[...this.state.FoodList,...data]
		},
		//设置商品信息
		setFootInfoData(state,data){
			this.state.FootInfoData=data
		},
		//设置商品图片
		setFootPicData(state,data){
			this.state.FootPicData=data
		},
		//设置省份数组
		setProvinceData(state,data){
			this.state.provinceList=data
		},
		//设置城市数组
		setCityData(state,data){
			this.state.cityList=data
		},
		setCityName(state,data){
			this.state.cityName=data
		}
	},
	actions:{
		//请求列表页左侧数据
		getSidebarLeftData({commit}){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546915839784&act=mobile_cate&op=index').then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas			
				commit('setSidebarLeftData',data)
			})
		},
		//请求列表页右侧数据
		getSidebarRightData({commit},id){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546932346313&act=mobile_cate&op=index',`gc_id=${id}`).then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas			
				commit('setSidebarRightData',data)
			})
		},
		//请求FoodList数据
		getFoodList({commit},{id,province_id,city_id,page}){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546944078688&act=goods&op=goodsList',`provinc=${province_id}&city=${city_id}&keyword=&page=${page}&sorted=4&sequence=0&gcId=${id}&workshop=`).then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas.list			
				commit('setFoodList',data)
			})
		},
		//请求商品信息
		getFootInfoData({commit},{city_id,province_id,id}){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546997782961&act=mobile_goods_detail&op=getGoodsInfo',`city_id=${city_id}&province_id=${province_id}&goods_id=${id}&key=`).then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas			
				commit('setFootInfoData',data)
			})
		},
		//请求商品图片
		getFootPicData({commit},{commonId,goodId}){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547014110065&act=mobile_goods_detail&op=getDetailData',`common_id=${commonId}&goods_id=${goodId}%23x-t3&key=`).then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas.goodsDetail.goods_body			
				commit('setFootPicData',data)
			})
		},
		//请求省份数组
		getProvinceData({commit}){
			axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547098741828&act=Address&op=get_region','region=province_name').then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas		
				commit('setProvinceData',data)
			})
		},
		getCityData({commit},{id,name}){
			 axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547102968586&act=Address&op=get_region',`region=city_name&parent_id=${id}`
						).then(res=>{
				// console.log(res.data.datas);
				const data=	res.data.datas		
				commit('setCityData',data)
				commit('setCityName',name)
			})
		}
	}
})
export default store
