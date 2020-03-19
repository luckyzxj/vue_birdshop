<template>  
  <div class="shop">
    <shopHeader/>
    <mt-navbar v-model="selected">
      <mt-tab-item id="/shop/goods" @click.native="goTo('/shop/goods')">点餐</mt-tab-item>
      <mt-tab-item id="/shop/rating" @click.native="goTo('/shop/rating')">评价</mt-tab-item>
      <mt-tab-item id="/shop/info" @click.native="goTo('/shop/info')">商家</mt-tab-item>
    </mt-navbar>
    
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="/shop/goods">
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="/shop/rating">
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="/shop/info">
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
    </mt-tab-container>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>


<script>
import shopHeader from '../../components/shopHeader/shopHeader.vue'
  export default {
    data(){
      return{
        selected: this.$route.path == '/shop'?'/shop/goods':this.$route.path
      }
    },
    components:{
      shopHeader
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
    watch:{
      $route(){
        this.selected = this.$route.path
      }
    },
    mounted(){
      this.$store.dispatch('getShopInfo')
    }
  }

</script>
  
<style>
  .mint-tab-item-label{
    font-size: 14px !important;
  }
  .mint-navbar .mint-tab-item{
    flex: none;
    margin-left: 4.1rem;
    width: 3rem
  }
</style>