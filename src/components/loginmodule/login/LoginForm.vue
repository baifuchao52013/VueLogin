<template>
  <div class="login-form">
    <form >
      <ul>
        <li>
            <input type="text" v-model="user.username" placeholder="username"><i class="fa fa-user" aria-hidden="true"></i>
        </li>
        <li>
            <input type="password" v-model="user.password" placeholder="password"><i class="fa fa-unlock" aria-hidden="true"></i>
        </li>
        <li class="login-submit">
          <el-button class="login-button" type="primary" v-on:click="sendUserToParent">登 录</el-button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        user: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      sendUserToParent: function () {
          this.$emit("getChildUser",this.user);
      }
    }
  }
</script>

<style scoped>
  .login-form{
    height: 100%;
  }
  input {
    width: 83%;
    background: none;
    border: none;
    border-bottom: 1px solid #ffffff;
    outline: none;
    color: white;
    height: 50px;
    line-height: 40px;
    padding-left: 50px;
    font-size: 20px;
    font-family: 黑体;
  }
  i{
    position: absolute;
    font-size: 35px;
    left: 5px;
    top: 5px;
    color:white;
  }
  li{
    width: 80%;
    margin: 20px auto;
    list-style-type: none;
    position: relative;
    box-sizing: border-box;
  }
  .login-button{
    width: 80%;
    margin: 0 auto;
  }
  .login-submit{
    text-align: center;
  }
  input::-webkit-input-placeholder{
    color:white;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:white;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:white;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:white;
  }

</style>
