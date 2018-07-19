<template>
  <div class="login-box">
    <p>{{title}}</p>
    <div>
      <login-form v-on:getChildUser="getChildUser"></login-form>
    </div>
  </div>
</template>
<script>
  import LoginForm from './LoginForm'
  export default {
    name: "LoginBox",
    components: {LoginForm},
    data(){
      return{
        user:""
      }
    },
    props: {
      title: {
        type: String
      }
    },
    methods:{
      getChildUser:function(data){
        this.user=data;
        this.$emit("sendUserToParent",this.user);
      }
    }
  }
</script>

<style scoped>
  .login-box {
    width: 350px;
    height: 270px;
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.2);
    margin: 0px auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .login-box > p {
    color: white;
    font-family: "黑体";
    margin: 15px auto;
    text-align: center;
    font-size: 18px;
  }
</style>
