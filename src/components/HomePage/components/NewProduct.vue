<template>
  <div class='NewProduct' v-if="Data && Data.length">
    <div class='NewProduct-Title'>新品首发<span>查看更多&gt;</span></div>
    <div class='NewProduct-Content'>
      <a :href="item.Url" v-for='(item, index) in Data' :key='index'>
          <!-- <img :src="item.ImageUrl | AnalysisImg" alt=""> -->
          <img v-lazy="item.ImageUrl" alt="">
          <div class='Product-Title'>{{item.Title}}</div>
          <div class='Product-Describe'>{{item.Describe}}</div>
          <div class='Product-Price'>￥{{item.Param1}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Data']
}
</script>

<style lang='less' scope>
@rem: 46.875rem;
.NewProduct{
    overflow: hidden;
    .NewProduct-Title{
        text-align:center;
    }
    .NewProduct-Content{
        a{
            width: ((750-40)/3)/@rem;
            float: left;
            margin-left: 10/@rem;
            text-decoration: none;
            img{
                width: ((750-40)/3)/@rem;
                height: ((750-40)/3)/@rem;

                padding-top: 26/@rem;
                background: white;
                padding-bottom: 26/@rem;
            }
            .Product-Title{
                line-height: 40/@rem;
                font-size: 28/@rem;
                height: 40/@rem;
                overflow: hidden;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #565656;
            }
            .Product-Describe{
                line-height: 40/@rem;
                font-size: 24/@rem;
                height: 40/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #a7a7a7;
            }
            .Product-Price{
                font-size: 28/@rem;
                color: #b4282d;
                line-height: 34/@rem;
                height: 34/@rem;
            }
        }
    }
}
</style>
