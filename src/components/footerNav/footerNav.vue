<template>  
<div id="tab-bar">
  <mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="home" @click.native="goTo('/home')">
    <img slot="icon" src="../../common/img/home.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="search" @click.native="goTo('/search')">
    <img slot="icon" src="../../common/img/search.png">
    搜索
  </mt-tab-item>
  <mt-tab-item id="order" @click.native="goTo('/order')">
    <img slot="icon" src="../../common/img/order.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="personal" @click.native="goTo('/personal')">
    <img slot="icon" src="../../common/img/personal.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  
  
</div>

</template>


<script>
  export default {
    data() {
      return {
      selected: 'home'
    }
  },
    methods: {
      goTo(path) {
        this.$router.push(path)
      }
    }
  

  }

</script>
  
<style scoped>
  
</style>