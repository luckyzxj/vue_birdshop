// 入口JS

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css' 
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import '../static/css/reset.css'
import {Header} from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui'
import { Switch } from 'mint-ui'
import store from './store'

Vue.component(Switch.name, Switch)
Vue.prototype.axios = axios;
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header);
Vue.directive("focus",{
  inserted(elem){
    elem.focus()
  }
})
new Vue({
  el:'#app',
  store,
  render: h=> h(App),
  router
})