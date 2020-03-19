<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont iconjianhaob" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont iconplus-line" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object
    },
    methods: {
      updateFoodCount (isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .iconjianhaob
      display: inline-block
      padding 2px
      line-height 13px
      font-size 13px
      font-weight 800
      color #26A2FF
      border 2px solid #26A2FF
      border-radius 50%
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 20px
      padding-top: 6px
      line-height: 15px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .iconplus-line
      display: inline-block
      padding: 3px
      line-height: 15px
      font-size: 15px
      background-color #26A2FF
      color #fff
      border-radius 50%
</style>
