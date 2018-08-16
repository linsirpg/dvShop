<template>
  <div class='specialArea'>
    <div class='specialArea-tltie'>特色专区</div>
    <div class='specialArea-content'>
      <a :href="item.Url" v-for='(item, index) in Data' :key='index'>
        <!-- <img :src="item.ImageUrl | AnalysisImg" alt=""> -->
        <img v-lazy="item.ImageUrl" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Data']
}
</script>
<style scope lang='less'>
@rem: 46.875rem;
.specialArea{
  overflow: hidden;
  .specialArea-tltie{text-align:center;}
  .specialArea-content{
    a{
      display:block;
      float:left;
      width:50%;
      img{
        width:100%;
        height:100%;
      }
    }
  }
}
</style>
