<template>
  <div class='AdversitingOne'>
    <div v-if="Data && Data.length == 2">
        <a :href="item.Url" v-for='(item, index) in Data' :key='index' :class="'AdversitingOne'+Data.length">
            <img :src="item.ImageUrl | AnalysisImg" alt="">
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
  .AdversitingOne2{
      width:50%;
      overflow: hidden;
      float:left;
      display: block;
      img{width:100%;height:100%;border-radius:0;}
  }
}
</style>
