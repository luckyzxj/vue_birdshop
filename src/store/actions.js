export default{
  getInfo(context){
    context.commit('setInfo',{
      money: 1000
    })
  }
}