import {
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_CATEGORYS,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo,
  reqSearchShops
} from '../api'
export default{
  //异步获取地址
  async getAddress({commit,state}){
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code == 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食物分类
  async getFoodCategorys({commit}){
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if(result.code == 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家
  async getShops({commit,state}){
    // 发送异步ajax请求
    const {longitude,latitude} = state
    const result = await reqShops({longitude,latitude})
    //提交一个mutation
    if(result.code == 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 同步记录userinfo
  receiveUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code===0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  // 异步登出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit},callback){
    const result = await reqGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新通知组件
      callback && callback()
    }
  },
  // 异步获取商品评价列表
  async getShopRatings({commit},callback){
    const result = await reqRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      //数据更新通知组件
      callback && callback()
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqInfo()
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  // 同步更新food中的count值
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  //同步清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  },
  //异步获取搜索商家列表
  async searchShops({commit,state},keyword){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(keyword,geohash)
    if(result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  }
}