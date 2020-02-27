// 直接更新state的多个方法的对象
export default {
  addMoney(state,payLoad){
    state.money += payLoad
  },
  setInfo(state,info){
    state.money = info.money
  }
}