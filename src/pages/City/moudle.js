import axios from "axios"
function getProvinceData(){
	return axios.post('/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1547098741828&act=Address&op=get_region','region=province_name'
				).then(res=>{
		return res.data
	})		
}

export {getProvinceData}