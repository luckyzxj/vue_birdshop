<template>  
<div>
  <mt-header title="搜索"></mt-header>
  <div class="search">
    <input type="text" placeholder="请输入商家或美食名称">
    <input type="submit">
  </div>
</div>

</template>


<script>
  export default {}

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