// 路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import Personal from '../pages/personal/personal.vue'
import Search from '../pages/search/search.vue'
import Login from '../pages/login/login.vue'
import Shop from '../pages/shop/shop.vue'
import ShopGoods from '../pages/shop/shopGoods/shopGoods.vue'
import ShopRating from '../pages/shop/shopRating/shopRating.vue'
import ShopInfo from '../pages/shop/shopInfo/shopInfo.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path:'/',
      component: Home,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/home',
      component: Home,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/personal',
      component: Personal,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/shop',
      component: Shop,
      children: [
        {
          path:'',
          component: ShopGoods
        },
        {
          path:'/shop/goods',
          component: ShopGoods
        },
        {
          path:'/shop/rating',
          component: ShopRating
        },
        {
          path:'/shop/info',
          component: ShopInfo
        }
      ]
    }
  ]
})