<template>  
<div id="app">
  <router-view/>
  <footerNav v-show="$route.meta.showFooter"/>
</div>
</template>


<script>
  import footerNav from './components/footerNav/footerNav.vue'
  export default {
    name: 'app',
    components:{
      footerNav
    },
    mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUserInfo')
    }
  }

</script>
  
<style scoped>


</style>