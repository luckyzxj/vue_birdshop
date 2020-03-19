// 入口JS

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css' 
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import '../static/css/reset.css'
//加载mockserver  拦截axios请求，withCredentials：true 无用，密码登录验证码不正确，取不到session里的值
import './mock/mockServer'  
import store from './store'
import {Header} from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui'
import { Switch } from 'mint-ui'
import { Navbar } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import loading from './common/img/loading.gif'
//图片懒加载
Vue.use(VueLazyload,{
  loading,
  error: loading
})
import VueLazyload from 'vue-lazyload'
Vue.prototype.axios = axios
axios.defaults.withCredentials = true



Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header);
Vue.component(Navbar.name, Navbar)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)


//自定义指令
Vue.directive("focus",{
  inserted(elem){
    elem.focus()
  }
})

//时间过滤器
Vue.filter('date-format',function(ratingTime){
  let date = new Date()
  date.setTime(ratingTime)
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  let second = date.getSeconds()
  return year+'/'+month+'/'+day+' '+hour+':'+min+':'+second
})

new Vue({
  el:'#app',
  store,
  render: h=> h(App),
  router
})