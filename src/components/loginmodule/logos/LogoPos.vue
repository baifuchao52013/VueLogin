<template>
    <div class="logo-pos" v-if="showLogin">
      <logo  v-bind:imageSrc="imageSrc"></logo>
    </div>
</template>

<script>
  import Logo from './Logo'
    export default {
        name: "LogoPos",
      components:{
        Logo
      },
      data(){
          return{
            imageSrc:"../../../static/img/xixi.png",
            showLogin:true
          }
      }
    }
</script>
<style scoped>
  .logo-pos{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>
