<template>
  <section class="search">
    <mt-header title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" v-focus class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        noSearchShops: false
      }
    },

    computed: {
      ...mapState(['searchShops'])
    },

    methods: {
      search () {
        // 得到搜索关键字
        const keyword = this.keyword.trim()
        // 进行搜索
        if(keyword) {
          this.$store.dispatch('searchShops', keyword)
        }
      }
    },

    watch: {
      searchShops (value) {
        if(!value.length) { // 没有数据
          this.noSearchShops = true
        } else {// 有数据
          this.noSearchShops = false
        }
      }
    },

    components: {
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      *zoom 1
      &::after
        content ''
        display block
        clear both
      margin-top 20px
      input
        height 40px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        margin-right 5px  
        &.search_input
          float left
          width 82%
          border 6px solid #FAFAFA
          font-size 14px
          color #333
          background-color #EFEFF4
        &.search_submit
          float right
          width 15%
          height 2.3rem
          margin-top 1px
          border 4px solid #26A2FF
          font-size 16px
          color #fff
          background-color #26A2FF

    .list
      .list_container
        background-color: #EFEFF4
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #EFEFF4
      text-align: center
      margin-top: 0.125rem
</style>