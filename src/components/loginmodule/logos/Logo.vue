<template>
    <div class="logo">
      <img :src="imageSrc"/>
    </div>
</template>

<script>
    export default {
        name: "Logo",
      props:{
       imageSrc:{
         type:String
       }
      }
    }
</script>

<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
</style>
