<template>  
<div id="app-home">
  <!-- 首页顶部 mint-ui-->
  <mt-header slot="icon" title="川环南路 妙境一村">
    <router-link to="/search" slot="left">
      <span class="iconfont iconsousuo" style="font-size: 1.2rem;">

			</span>
    </router-link>
    <span to="/" slot="right">
      <router-link to="/login" style="color:#fff;">登录 | 注册</router-link>
    </span>
  </mt-header>
  <!--mint-ui的轮播 组合 mui的九宫格 更改flex布局col 一行4个-->
  <mt-swipe :auto="0" >
    <mt-swipe-item>
      <div class="mui-content">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/2.jpg" alt="" width=45px>
										<div class="mui-media-body">蔬菜水果</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/1.jpg" alt="" width=45px>
										<div class="mui-media-body">新店特惠</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/3.jpg" alt="" width=45px>
										<div class="mui-media-body">医药</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/4.jpg" alt="" width=45px>
										<div class="mui-media-body">准时达</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/5.jpg" alt="" width=45px>
										<div class="mui-media-body">商超便利</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/6.jpg" alt="" width=45px>
										<div class="mui-media-body">美食</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/7.jpg" alt="" width=45px>
										<div class="mui-media-body">甜品饮品</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/8.jpg" alt="" width=45px>
										<div class="mui-media-body">麻辣烫</div></a></li>
					
				</ul> 
		  </div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="mui-content">
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/2.jpg" alt="" width=45px>
										<div class="mui-media-body">蔬菜水果</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/1.jpg" alt="" width=45px>
										<div class="mui-media-body">新店特惠</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/3.jpg" alt="" width=45px>
										<div class="mui-media-body">医药</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/4.jpg" alt="" width=45px>
										<div class="mui-media-body">准时达</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/5.jpg" alt="" width=45px>
										<div class="mui-media-body">商超便利</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/6.jpg" alt="" width=45px>
										<div class="mui-media-body">美食</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/7.jpg" alt="" width=45px>
										<div class="mui-media-body">甜品饮品</div></a></li>
						<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
										<img src="../../common/img/nav/8.jpg" alt="" width=45px>
										<div class="mui-media-body">麻辣烫</div></a></li>
					
				</ul> 
		  </div>
    </mt-swipe-item>
  </mt-swipe>
  <shopList/>
</div>

</template>


<script>
	import shopList from '../../components/shopList/shopList.vue'
  export default {
		components: {
			shopList
		},
		created(){
			this.getShops()
		},
    methods:{
			getShops(){
				var url = "http://localhost:3000/shops";
				this.axios.get(url).then(result=>{
					console.log(result);
				})
			}
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