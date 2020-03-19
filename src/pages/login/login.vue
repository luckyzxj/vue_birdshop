<template>
  <div class="app-login">
    <div class="iconfont iconfanhui-" @click="back" style="padding:5px 0 0 4px"></div>
    <div class="login_container">
      <div class="login_header">
        <h2 class="login_logo">小鸟外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_count">
              <input v-focus type="text" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" :class="{right_phone: rightPhone}" @click.prevent="getCode">
                {{computeTime>0?`已发送${computeTime}s`:'获取验证码'}}
              </button>
            </section>
            <input type="text" placeholder="验证码" v-model="code">
            <section class="login_hint">
              温馨提示：未注册小鸟外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
            <mt-button type="primary" size="large" style="width: 90%;margin:auto;margin-bottom: 2rem">登录</mt-button>
            <a href="javascript:;">关于我们</a>
          </div>
          <div :class="{on: !loginWay}">
            <input v-focus type="text" placeholder="手机号/用户名" v-model="name">
            <section class="showPwd">
              <input :type='show' placeholder="密码" v-model="pwd">
              <section class="switch" :class="{show: show_pwd}" @click="showPwd">{{text}}</section>
              <section class="circle" :class="{show: show_pwd}" @click="showPwd"></section>
            </section>
            
            <section class="picCaptcha">
              <input type="text" placeholder="验证码" v-model="captcha">
              <img src="http://localhost:3000/captcha" alt="captcha" @click="getCaptcha" ref="captcha">
            </section>
            <mt-button type="primary" size="large" style="width: 90%;margin:auto;margin-bottom: 2rem">登录</mt-button>
            <a href="javascript:;">关于我们</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import {reqSendCode,reqPwdLogin,reqSmsLogin} from '../../api'
  export default {
    data(){
      return {
        loginWay: true,  //true代表短信登录
        phone: "",        //手机号
        computeTime: 0,   //倒计时
        show_pwd:false,   //是否显示密码按钮
        show: 'password', //密码框的type
        text: '',          //按钮内容
        name: '',              //用户名
        code: '',              //手机验证码
        name: '',             //用户名
        pwd: '',              //密码
        captcha: ''           //验证码
      }
    },
    computed: {
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      back(){
        this.$router.back()
      },
        getCaptcha(){
          //每次指定的src值不一样，触发刷新
          this.$refs.captcha.src = "http://localhost:3000/captcha?time=" + Date.now()
        },
      async getCode(){
        
        //启动倒计时
        if(!this.computeTime){
          this.computeTime=30;
          this.intervalId=setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              clearInterval(this.intervalId)
            }
          }, 1000)
          //向指定手机号发送验证码
          const result = await reqSendCode(this.phone); 
          if(result.code===1){
            MessageBox({
              title: "提示",
              message: result.msg
            })
            // 停止计时
            if(this.computeTime){
              this.computeTime = 0
              clearInterval(this.intervalId)
            }
          }
          }
        },
        showPwd(){
          this.show_pwd=!this.show_pwd
          if(this.show==="password"){
            this.show="text"
          }else{
            this.show="password"
          }
          
        },
        async login(){
          const {name,captcha,pwd,code,phone,rightPhone,loginWay} = this
          let result
          if(loginWay){
            //短信登录
            if(!rightPhone){
              // 提示输入正确的手机号
              MessageBox({
                title: "提示",
                message: "请输入正确的手机号"
              })
              return
            }else if(!/^\d{6}$/.test(code)){
                // 提示验证码必须六位
                MessageBox({
                  title: "提示",
                  message: "手机验证码必须六位"
                })
                return
              }
            result = await reqSmsLogin(phone,code)
          }else{
            //密码登录
            if(!name){
              // 提示用户名必须指定
              MessageBox({
                  title: "提示",
                  message: "用户名必须指定"
              })
              return
            }else if(!pwd){
                // 提示密码必须指定
                MessageBox({
                  title: "提示",
                  message: "密码必须指定"
                })
                return
            }else if(!captcha){
                //提示验证码必须指定 
                MessageBox({
                  title: "提示",
                  message: "验证码必须指定"
                })
                return
            }
            //发送ajax请求密码登录
            result = await reqPwdLogin({name,pwd,captcha})
          }
          // 停止计时
          if(this.computeTime){
            this.computeTime = 0
            clearInterval(this.intervalId)
          }
          // 结果数据处理
          if(result.code===0){
            const user = result.data
            //将user信息保存到vuex的state
            this.$store.dispatch('receiveUser',user)
            // 去个人中心界面
            this.$router.replace('/personal')
          }else{
            const msg = result.msg
            this.getCaptcha()
            MessageBox({
              title: '提示',
              message: msg
            })
          }
        }
      },
      watch:{
        // computeTime(){
        //   if(this.computeTime==0){
        //     this.phone=this.phone.slice(0,-1)
        //   }
        // },
        show(){
          if(this.show==="password"){
            this.text=''
          }else{
            this.text='abc'
          }
        }
      }
    }
  

</script>

<style scoped>
.iconfont.iconfanhui-{
  color: #aaa;
  font-size: 1.5rem;
}
  body[style] {
       background-color: #fafafa !important;
  }
  .on{
    color: #26A2FF;
    font-weight: 700;
    border-bottom: 2px solid #26A2FF;
  }
  .login_logo{
    color: #26A2FF;
    font-size: 2rem;
    font-weight: 700;
    margin: 2.5rem auto;
  } 
  .login_header{
    display: flex;
    flex-direction: column;
  }
  .login_header_title{
    display: flex;
    justify-content: center;
  }
  .login_header_title a{
    margin: 1rem;
    padding-bottom: 0.3rem;
    font-size: 1.2rem;
  }
  .login_content div.on{
    border-bottom: 0;
    text-align: center;
    display: block;
  }
  div.on input{
    width: 90%;
    border-radius: 4px;
    color: #000;
  }
  div.on input:focus{
    border: 2px solid #26A2FF;
  }
  .login_content div{
    display: none;
  }
  .login_content .login_hint{
    color: #757575;
    width: 90%;
    margin: auto;
    text-align: start;
    margin-bottom: 1rem;
  }
  .login_content .login_hint a{
    color: #26A2FF;
  }
  .login_count{
    position: relative;
  }
  .login_count button{
    background-color: #fff;
    position: absolute;
    top: 0.3rem;
    right: 1.2rem;
    border: 0;
    color: #aaa;
  }
  .login_count .right_phone{
    color: #000;
  }
  .showPwd{
    position: relative;
  }
  .switch{
    height: 15px;
    width: 30px;
    border: 1px solid #bbb;
    border-radius: 50px;
    position: absolute;
    right: 2rem;
    top: 0.7rem;
  }
  .circle{
    height: 15px;
    width: 15px;
    border: 1px solid #bbb;
    border-radius: 50%;
    position: absolute;
    right: 3rem;
    top: 0.7rem;
  }
  .switch.show{
    background-color:  #26A2FF;
    font-size: 0.7rem;
    color: #bbb;
  }
  .circle.show{
    right: 2rem;
    background-color:  #fff;
  }
  /* 图片验证码部分 */
  .picCaptcha {
    position: relative;
  }
  .picCaptcha img{
    display: inline-block;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
</style>