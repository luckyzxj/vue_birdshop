<template>  
<div>
  <mt-header title="搜索"></mt-header>
  <div class="search">
    <input v-focus type="text" placeholder="请输入商家或美食名称">
    <input type="submit">
  </div>
    <p>{{money}}</p>
    <p>{{money_us}}</p>
    <button @click="addMoney(100)">加</button>
</div>

</template>


<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {ADD_MONEY} from '../../store/mutation-types'
  export default {
    computed: {
      ...mapState(["money"]),
      ...mapGetters(["money_us"])
    },
    created(){
      // var res = this.$store.dispatch("getInfo")
      var res = this.getInfo()
      res.then((res)=>{
        console.log(res)
      })
    },
    methods:{
      // addMoney(){
      //   this.$store.commit("addMoney",100)
      // }
      ...mapMutations([ADD_MONEY]),
      ...mapActions(["getInfo"])
    }
  }

</script>
  
<style scoped>
  .search{
    display: flex;
    margin: 1rem 0;
  }
  .search input[type="text"]{
    background-color: #EFEFF4;
    border: 6px solid #fff;
  }
  .search input[type="submit"]{
    width: 3rem;
    height: 2.3rem;
    margin:0.1rem 0.2rem 0 0.2rem;
  }

</style>