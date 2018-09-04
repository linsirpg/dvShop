<template>
  <div class='loading'>
    <img src="../../../assets/images/loading.gif" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scope lang='less'>
  .loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:10;
    img{
        width:100%;
        height:100%;
    }
  }
</style>
