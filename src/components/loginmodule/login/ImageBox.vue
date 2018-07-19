<template>
    <div class="login-image-box" v-if="isShow">
      <img-vertical-center v-bind:imagePath1="imagePath1"></img-vertical-center>
    </div>
</template>

<script>
  import VerticalCenterModule from '../../common/VerticalCenterModule'
    export default {
        name: "ImageBox",
      components:{
        "img-vertical-center":VerticalCenterModule
      },
      data(){
        return{
          imagePath1:"../../../../static/img/xi.jpg",
          isShow:true
        }
      },
      methods:{

      }
    }
 </script>

<style scoped>
    .login-image-box{
      width: 600px;
      position: absolute;
      border-radius: 15px;
      overflow: hidden;
      top:50%;
      left:50%;
      transform:translate(-40%,-50%);
      padding: 10px;
      background: #f7e6cc;
      border:4px solid white;

    }
</style>
