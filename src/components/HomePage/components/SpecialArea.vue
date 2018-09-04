<template>
  <div class='specialArea' v-if='Data && Data.length > 0'>
    <div class='specialArea-tltie'>特色专区</div>
    <a :href="item.Url" v-for='(item, index) in Data' :key='index'>
      <img v-lazy="item.ImageUrl" alt="">
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
.specialArea {
  width: 100%;
  overflow: hidden;
  .specialArea-tltie {
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    box-sizing: border-box;
    margin: 0 0 1px 0;
    margin-top:15/@rem;
    background: white;
    color: #747474;
  }
  a {
    width: 50%;
    height: (554/2)/@rem;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      width: 100%;
      vertical-align:bottom;
      height: 100%;
    }
    &:nth-of-type(1) {
      border-bottom: 1px solid #ededed;
      border-right:1px solid #ededed;
    }
    &:nth-of-type(2) {
      border-bottom: 1px solid #ededed;
    }
    &:nth-of-type(3) {
     border-right:1px solid #ededed;
    }
  }
}
</style>
