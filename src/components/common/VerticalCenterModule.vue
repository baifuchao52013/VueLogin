<template>
    <div class="module-vertical-center">
      <img  :src="imagePath1" >
    </div>
</template>

<script>
    export default {
        name: "VerticalCenterModule",
      data(){
          return{

          }
      },
        props:{
          imagePath1:{
            type:String
          }
        }
    }
</script>

<style scoped>
    .module-vertical-center{
      height: 100%;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      line-height: 0px;
    }
  .module-vertical-center>img{
    width: 100%;
  }
</style>
