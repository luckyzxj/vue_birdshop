// 入口JS

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css' 
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import '../static/css/reset.css'
import {Header} from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name,Header);
new Vue({
  el:'#app',
  render: h=> h(App),
  router
})