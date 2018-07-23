<template>
  <div class='catetory' v-if='Data && Data.length'>
    <router-link  :to="{path:'/Catetory/'}"  v-for='(item, index) in Data' :key='index' :class="Data.length != 5 && Data.length != 6? 'catetory-list'+(Data.length + 1) :'catetory-list'+(Data.length)">
      <div class='catetory-list-Img'>
        <img :src="item.ImageUrl | AnalysisImg" alt="">
      </div>
      <div>
        {{item.Title}}
      </div>
    </router-link>
    <router-link :to="{path:'/Catatory/'}" :class="'catetory-list'+(Data.length+1)" v-if='Data.length != 5 && Data.length != 6'>
      <div class='catetory-list-Img'>
        <img src="../../../assets/images/more.png" alt="">
      </div>
      <div>
        更多
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['Data']
}
</script>
<style lang='less' scope>
@rem: 46.875rem;
.catetory{
  overflow: hidden;
  .catetory-list10, .catetory-list5 {
    text-align: center;
    background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .catetory-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*5)/10)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
  .catetory-list4, .catetory-list8{
    text-align: center;
    background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .catetory-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*4)/8)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
  .catetory-list6{
    text-align: center;
    background: white;
    display: block;
    width: 33.333%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .catetory-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*3)/6)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
}

</style>
