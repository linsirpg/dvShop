<template>
  <div class='CategoryArea' v-if='Data && Data.length'>
    <a href="" v-for='(item, index) in Data' :key='index'>
        <img :src="item.ImageUrl | AnalysisImg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: ['Data']
}
</script>

<style scope lang='less'>
@rem: 46.875rem;
.CategoryArea {
  overflow: hidden;
  margin-top:15/@rem;
  a {
    display: block;
    float: left;
    img {
      width: 100%;
      vertical-align: bottom;
      height:100%;
    }
    &:nth-of-type(1) {
      width: 100%;
      border-bottom:1px solid #f6f6f6;
    }
    &:nth-of-type(2) {
      width: 50%;
    }
    &:nth-of-type(3) {
      width: 50%;
    }
    &:nth-of-type(4) {
      width: 33.333%;
      height:280/@rem;
 
    }
    &:nth-of-type(5) {
      width: 33.333%;
      border-left:1px solid #f6f6f6;
      border-right:1px solid #f6f6f6;
      box-sizing: border-box;
         height:280/@rem;

      
    }
    &:nth-of-type(6) {
      width: 33.333%;
         height:280/@rem;
      
    }
  }
}
</style>
