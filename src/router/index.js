import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import List from '@/pages/List/list.vue'
import Shopcar from '@/pages/Shopcar/shopcar.vue'
import Msite from '@/pages/Msite/msite.vue'
import Foodlist from '@/components/Food/foodlist.vue'
import Food from '@/components/Food/food.vue'
import Search from '@/components/search.vue'
import Province from '@/pages/City/province.vue'
import City from '@/pages/City/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{ path: '/',redirect:'/home'},
    { path: '/home',component:Home,name:'home',meta:{footbarShow:true}},
    { path: '/list',component:List,name:'list',meta:{footbarShow:true}},
    { path: '/shopcar',component:Shopcar,name:'shopcar',meta:{footbarShow:true}},
    { path: '/msite',component:Msite,name:'msite',meta:{footbarShow:true}},
    { path: '/foodlist',component:Foodlist, name:'foodlist'},
    { path: '/food',component:Food, name:'food'},
    {path: '/province',component:Province,},
    {path: '/city',component:City},
		 {path: '/search',component:Search}
  ]
})
