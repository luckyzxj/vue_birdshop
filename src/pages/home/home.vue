<template>  
<div id="app-home">
  <!-- 首页顶部 mint-ui-->
  <mt-header slot="icon" title="川环南路 妙境一村">
    <router-link to="/search" slot="left">
      <img src="../../common/img/search_top.png" width=20px>
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
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">about</div></a></li>
		          
		        </ul> 
		  </div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/6.jpg" alt="" width=45px>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <img src="../../common/img/nav/2.jpg" alt="" width=45px>
		                    <div class="mui-media-body">about</div></a></li>
		          
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
		}
      
	}

</script>
  
<style>
	/* body {
		background: #fff !important;
	} */
	/* #app-home .mint-swipe ul {
		background: #fff !important;
	}  */
  #app-home .mint-swipe-indicator.is-active{
    background-color: rgb(255, 0, 0);
  }
  #app-home .mint-swipe{
    width:100%;
    height:15rem;
  }
  #app-home .mui-grid-view,
  #app-home .mui-grid-view .mui-table-view-cell {
    border:0;;
  }
  #app-home .mint-swipe-indicators {
    bottom:-2px;
  }
</style>