<template>
  <div class="module-login" v-if="showLogin">
    <login-box v-bind:title="title" v-on:sendUserToParent="loginSystem"></login-box>
  </div>
</template>

<script>
  import LoginBox from './LoginBox'

    export default {
        name: "login",
      components: {LoginBox},
      data(){
          return{
            title:"中国湿地",
            showLogin:true,
            user:""
          }
      },

      methods:{
        loginSystem:function(data){
            this.user=data;
            console.log(this.user);
            if (data) {
              this.$axios.post("/apis/user/login",{username:this.user.username,password:this.user.password})
                .then(data =>{
                  console.log(data)
                })
            /*  if (this.user.username === 'admin' && this.user.password === '123') {
                // dispatch采用Promise链式调用
                this.$store.dispatch('login', this.user.username).then(() => {
                  this.$notify({
                    type: 'success',
                    message: '欢迎你,' + this.user.username + '!',
                    duration: 3000
                  })
                })
              } else {
                this.$message({
                  type: 'error',
                  message: '用户名或密码错误',
                  showClose: true
                })
              }*/
            }
            else {
              return false
            }
          }
      }
    }
</script>

<style scoped>
    .module-login{
      position: absolute;
      top: 30%;
      right: 15%;
    }
</style>
