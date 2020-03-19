<template>  
<div class="app-personal">
  <mt-header title="我的"></mt-header>
  <div class="personal">
    <ul>
       <li class="mui-table-view-cell mui-media">
        <router-link :to="userInfo._id?'/userInfo':'/login'">
            <img class="mui-media-object mui-pull-left" src="./person.png">
            <div class="mui-media-body">
                <p v-if="!userInfo.phone">{{userInfo.name || '登录 / 注册'}}</p>
                <p class='mui-ellipsis'>{{userInfo.phone || '暂无绑定手机号'}}</p>
            </div>
        </router-link>
      </li>
    </ul>
    <div class="arrow"><img src="./arrow.png" alt=""></div>
  </div>
  <div class="count">
    <div class="money">
      <div>
        <p>0.00</p>
        <p>我的余额</p>
      </div>
    </div>
    <div class="money">
      <div>
        <p>0</p>
        <p>我的优惠</p>
      </div>
    </div>
    <div class="money">
      <div>
        <p>0</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell order">
        <router-link class="mui-navigate-right" to="/order">我的订单</router-link>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">积分商城</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">小鸟外卖会员卡</a>
    </li>
  </ul>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell server">
        <a class="mui-navigate-right">服务中心</a>
    </li>
  </ul>
  <mt-button type="danger" size="large" v-if="userInfo._id" @click="logout">退出登录</mt-button>
</div>

</template>


<script>
import {MessageBox,Toast} from 'mint-ui'
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      logout(){
        MessageBox.confirm('确认退出吗？').then(
          action=>{
            this.$store.dispatch('logout')
            Toast({message:'退出成功',position:'bottom'})
          },
          action=>{
            console.log('取消')
          }
        )
      }
    }
  }

</script>
  
<style scoped>
  .personal{
    display: flex;
    background-color: #26A2FF;
    width: 100%;
    height: 5rem;
    border-top: 1px solid #fff;
  }
  .count{
    display: flex;
    justify-content: space-between;
    height: 5rem;
  }
  .money{
    width: 33%;
    background-color: #fff;
  }
  .app-personal .mui-pull-left{
    width: 2.5rem;
    margin-right: 1rem;
  }
  .app-personal .personal ul{
    margin: auto 0;
    width: 100%
  }
  .app-personal .arrow{
    margin: auto 0;
  }
  .app-personal .arrow img{
    width: 2rem;
  }
  .app-personal .mui-media-body{
    color: #fff;
  }
  .app-personal .mui-media-body p:last-child{
    color: #fff;
    font-size: 0.8rem;
    padding-top: 0.8rem;
  }
  .app-personal .mui-media-body p:first-child{
    color: #fff;
  }
  .order,.server{
    margin-top: 1rem;
  }
  .server{
    margin-bottom: 1rem;
  }
  .money{
    display: flex;
  }
  .money div{
    margin:auto;
  }
  .money div p{
    color: #000;
    padding: 0.5rem;
    text-align: center;
  }
</style>