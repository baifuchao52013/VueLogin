<template>
 <div class="login-page">
   <el-row>
     <el-col :span="12">
       <div class="el-col">
         <logo-pos></logo-pos>
         <image-box></image-box>
       </div>
     </el-col>
     <el-col :span="12">
      <div class="el-col">
        <login></login>
      </div>
     </el-col>
   </el-row>



 </div>
</template>

<script>
  import ImageBox from '../components/loginmodule/login/ImageBox'
  import Login from '../components/loginmodule/login/Login'
  import LogoPos from '../components/loginmodule/logos/LogoPos'
    export default {
        name: "LoginView",
      components:{
        Login,LogoPos,"image-box":ImageBox
      }
    }
</script>

<style scoped>
  .login-page{
    background: url("../../static/img/bg006.png") no-repeat ;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  }
  .el-col{
    height: 100%;
    position: relative;
  }
  .el-row{
    height: 100%;
  }
</style>
