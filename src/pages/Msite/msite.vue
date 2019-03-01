<template>
	<div>
		
		<div class="all">
    <p style="font-size: 22px;"><span style="color:red;" @click="goback1()">X</span>登录</p>
    <ul class="login">
      <li style="background: red;color:white;">乐村淘账户登录</li>
      <router-link tag="li" to="/home" >免费注册</router-link>
      
    </ul>
    <div class="in">
      <input class="loginTop" type="text" placeholder="输入手机号/用户名" name="">
      <input type="password" placeholder="请输入密码" name="">
    </div>

    <div class="an">
      <button class="one" type="" style="font-size: 18px">登录</button>
      <button class="two" type="" style="font-size: 18px">找回密码</button>
    </div>
  </div>
	</div>

</template>
<script type="text/javascript">
  export default{
    methods:{
      goback1(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
	*{
    margin: 0;
    padding: 0;
  }

  body{
    background: #f0f0f0;

  }
  .all{
    background: #f0f0f0;
    width: 100%;
    height: 100%;
  }
  p{
    width: 95%;
    margin: 0 auto;
    height: 1rem;

    line-height: 1rem;
    font-size: .6rem;
    text-align: center;
    span{
      float: left;
    }
  }
  .l{
    float:left;
  }
  .login{
    margin: 0 auto;
    width: 95%;
    display: flex;
    list-style: none;
    border-radius: .1rem;
    border: 1px solid red;
    height: .8rem;
    margin-top: .4rem;
    font-size:.36rem
  }
  li{
    flex: 1;
    text-align: center;
    height: 100%;
    line-height: .8rem;
  }
   .in{
    margin: 0 auto;
    width: 95%;
    margin-top: .6rem;
    margin-bottom: 1rem;
    text-align: center;
     background: white;
    border-radius:.16rem;
    font-size:.36rem
   }
   input{
    width: 90%;
    height: .9rem;
    border: none;
   }
   .loginTop{
    border-bottom: 1px solid #ccc;
   }
   .an{
    width: 95%;
    margin: 0 auto;


   }
   .one{
    width: 100%;
    background: red;
    border: none;
    border-radius: .1rem;
    height: .8rem;
   }
   .two{
    margin-top: .2rem;
    width: 100%;
    border: none;
    border-radius: .1rem;
    height: .8rem;
   }
   .red{
    background: #f81234;
    color: white;

   }
   .white{
    background: #f0f0f0;
   }
   .one{
    background:#f81234
   }
   .two{
    background: white;
   }
   
.iconfont {
  font-family: "iconfont" !important;
  font-size: .4rem;
  font-style: normal;



  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  color: black;
}
</style>
