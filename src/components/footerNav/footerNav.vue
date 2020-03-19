<template>  
  <div id="tab-bar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home" @click.native="goTo('/home')">
        <span slot="icon" class="iconfont iconmeishi"></span>
        外卖
      </mt-tab-item>
      <mt-tab-item id="search" @click.native="goTo('/search')">
        <span slot="icon" class="iconfont iconsousuo"></span>
        搜索
      </mt-tab-item>
      <mt-tab-item id="order" @click.native="goTo('/order')">
        <span slot="icon" class="iconfont iconwaimaidingdan0101"></span>
        订单
      </mt-tab-item>
      <mt-tab-item id="personal" @click.native="goTo('/personal')">
        <span slot="icon" class="iconfont iconwode"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: this.$route.path.substring(1) || 'home'
      }
    },
    methods: {
      goTo(path) {
        this.$router.push(path)
      }
    },
    watch:{
      $route(){
        this.selected=this.$route.path.substring(1)
      }
    }
  

  }

</script>
  
<style scoped>
  #tab-bar span{
    font-size: 1.5rem;
    font-weight: 800;
  }
</style>