<template>  
<div id="app-home">
  <!-- 首页顶部 mint-ui-->
  <mt-header slot="icon" :title="address.name" fixed>
    <router-link to="/search" slot="left">
      <span class="iconfont iconsousuo" style="font-size: 1.2rem;">

			</span>
    </router-link>
    <span to="/" slot="right">
      <router-link :to="userInfo._id?'/userInfo':'/login'" style="color:#fff;">
				<span v-if="!userInfo._id">	登录 | 注册 </span>
				<i class="iconfont iconwode" v-else></i>
			</router-link>
    </span>
  </mt-header>
  <!--mint-ui的轮播 组合 mui的九宫格 更改flex布局col 一行4个-->
  <mt-swipe :auto="0" style="margin-top:2.5rem">
    <mt-swipe-item>
      <div class="mui-content">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="(category,i) in categorys1" :key="i">
								<img :src="baseImageUrl+category.image_url" alt="" width=45px>
								<div class="mui-media-body">{{category.title}}</div>
						</li>
					
				</ul> 
		  </div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="mui-content">
		   	<ul class="mui-table-view mui-grid-view mui-grid-9">
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="(category,i) in categorys2" :key="i">
								<img :src="baseImageUrl+category.image_url" alt="" width=45px>
								<div class="mui-media-body">{{category.title}}</div>
						</li>
				</ul> 
		  </div>
    </mt-swipe-item>
  </mt-swipe>
  <shopList/>
</div>

</template>


<script>
	import {mapState} from 'vuex'
	import shopList from '../../components/shopList/shopList.vue'
  export default {
		data(){
			return {
				baseImageUrl: 'https://fuss10.elemecdn.com'
			}
		},
		components: {
			shopList
		},
		computed:{
			...mapState(['address','userInfo','categorys1','categorys2'])
		},
		mounted(){
			this.$store.dispatch('getShops')
			this.$store.dispatch('getFoodCategorys')
		},
    methods:{
			
		}
	}

</script>
  
<style>
	#app-home{
		height: 100%;
		background-color:#fff;
	}
	#app-home .mui-grid-view.mui-grid-9{
		background-color:#fff;
	}
  #app-home .mint-swipe-indicator.is-active{
    background-color: #26A2FF;
  }
  #app-home .mint-swipe{
    width:100%;
    height:15rem;
  }
  #app-home .mui-grid-view,
  #app-home .mui-grid-view .mui-table-view-cell {
    border:0;
  }
  #app-home .mint-swipe-indicators {
    bottom:-2px;
  }
	#app-home div.mui-media-body{
		color: #666;
	}
</style>