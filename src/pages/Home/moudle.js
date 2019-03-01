import axios from "axios"
function getHotData(province_id,city_id,page){
	return axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547004026689&act=goods&op=goodsRecom_new',`provinc=${province_id}&city=${city_id}&page=${page}&pageSize=10`
	).then(res=>{
		return res.data
	})		
}
function getHomeData(province_id,city_id){
	return axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1546917532710&act=index&op=index&key=',`province_id=${province_id}&city_id=${city_id}&qiang_zhi_geng_xin=`).then(res=>{
			return res.data
	})
}
export {getHotData,getHomeData}