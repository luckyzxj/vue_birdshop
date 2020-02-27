<template>
  <div class="shopList">
    	<div class="shopList_top">
				<img src="./images/shop/shop_list.png" alt="">
				<span>附近商家</span>
			</div>
			<div class="shop_container" @click="jumpProducts">
				<ul v-if="this.list.length">
					<li v-for="(item,i) in list" :key="i">
						<div class="shop_left">
							<img src="./images/shop/2.jpg" alt="">
						</div>
						<div class="shop_right">
								<div class="title">
									<h4 class="shop_name">
										<span class="brand">品牌</span>
										{{item.name}}
									</h4>
								</div>
								<div class="comment">
									<stars :score="item.rating" :size="24"/>
									<span class="score">{{item.rating}}</span>
									<span class="sold"> 月售 {{item.recent_order_num}} 单</span>
								</div>
								<div class="deliver">￥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}</div>
						</div>
						<div class="shop_promise"><span>{{item.delivery_mode.text}}</span></div>
					</li>
				</ul>
				<ul v-else>
					<li v-for="item in 6">
						<img src="./images/shop/shop_back.svg" alt="">
					</li>
				</ul>
			</div>
  </div>
</template>

<script>
import stars from '../star/stars.vue'
  export default{
    data(){
      return{
				list:[]
      }
		},
		components: {
			stars
		},
		created(){
			this.getShops()
		},
    methods:{
			getShops(){
				var url = "http://localhost:3000/shops";
				this.axios.get(url).then(result=>{
					this.list=result.data;
				})
			},
			jumpProducts(){
				this.$router.push('/products');
			}
		}
  }
</script>

<style scoped>
.shopList .shopList_top{
	padding-left:1rem;
	padding:1rem 0.8rem 0 0.8rem;
	margin-top:1rem;
	border-top:1px solid #ccc
}
	.shopList .shopList_top img{
		width:1.5rem;
	}
	.shopList .shopList_top span {
		color:#888888;
		margin-left:0.5rem;
		vertical-align: 0.3rem;
	}
	.shop_container{
		padding:0 0.8rem;
	}
	.shop_container li{
		display: flex;
		margin: 1rem 0;
	}
	.shop_container .shop_left img{
		width:5rem;
		height: 5rem;
	}
	.shop_container .shop_right{
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.4rem;
		width: 50%;
		margin: 0 0.5rem;
	}
	.shop_container .shop_name{
		letter-spacing: 1px;
		font-weight: border;
		white-space: nowrap;		
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.shop_container .comment,
	.deliver{
		font-size:0.8rem;
		color: #999;
	}
	.shop_container .comment span:first-child{
		color: #26A2FF;
	}
	.shop_container .brand{
		background-color: #26A2FF;
		padding: 0.2rem;
	}
	.shop_container .shop_promise span{
		border:1px solid #26A2FF;
		vertical-align: -2.5rem;
		font-size: 0.7rem;
		color: #26A2FF;
		margin-left: 1.5rem;
	}
	.score{
		color: #26A2FF;
	}
</style>