<template>  
<div class="app-order">
  <mt-header title="订单列表"></mt-header>
  <section>
    <img src="./images/person.png">
    <p>登录后可查看外卖订单</p>
    <mt-button type="primary" @click="jump">立即登录</mt-button>
  </section>
</div>

</template>


<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      jump(){
        this.$router.push("/login")
      }
    }
  }

</script>
  
<style scoped>
  .app-order section{
    text-align: center;
    margin-top: 3rem;
  }
  .app-order section p{
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
</style>