// 包含多个基于state的getter计算属性的对象
export default {
  money_us(state){
      return '$'+(state.money / 7).toFixed(2)
    } 
  
}