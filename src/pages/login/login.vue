<template>
  <div class="app-login">
    <div class="login_container">
      <div class="login_header">
        <h2 class="login_logo">小鸟外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form action="">
          <div :class="{on: loginWay}">
            <input type="text" placeholder="手机号/用户名">
            <input type="text" placeholder="验证码">
            <section class="login_hint">
              温馨提示：未注册小鸟外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
            <mt-button type="primary" size="large" style="width: 90%;margin:auto">登录</mt-button>
          </div>
          <div :class="{on: !loginWay}">
            <input type="text" placeholder="手机号/用户名">
            <input type="password" placeholder="密码">
            <input type="text" placeholder="验证码">
            <mt-button type="primary" size="large" style="width: 90%;margin:auto">登录</mt-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        loginWay: true
      }
    }
  }

</script>

<style scoped>
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
</style>