<template>
  <div class='AdversitingOne'>
    <div v-if="Data && Data.length == 2">
        <a :href="item.Url" v-for='(item, index) in Data' :key='index' :class="'AdversitingOne'+Data.length">
            <!-- <img :src="item.ImageUrl | AnalysisImg" alt=""> -->
            <img v-lazy="item.ImageUrl" alt="">
        </a>
    </div>
    <div v-if="Data && Data.length == 1">
        <a :href="item.Url" v-for='(item, index) in Data' :key='index' :class="'AdversitingOne'+Data.length">
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
    .AdversitingOne{
      overflow: hidden;
      padding: .21333333rem .21333333rem 0;
      div{
          a:nth-of-type(2){
          border-left: 1px solid #ededed;
      }
   }
  .AdversitingOne2{
      width:50%;
      overflow: hidden;
      float:left;
      display: block;
      box-sizing: border-box;

      img{
    width: 100%;
    vertical-align: bottom;
    padding: 0;
      }
}
  .AdversitingOne1{
      width:100%;
      overflow: hidden;
      float:left;
      display: block;
      img{
        width: 100%;
        border-radius: 8px;
        vertical-align: bottom;
      }
  }
}
</style>
