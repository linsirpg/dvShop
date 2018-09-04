<template>
  <div class='Catetory-hotSale' v-if='Data && Data.length > 0'>
    <div class='Catetory-hotSale-Title'>
      热卖爆款
    </div>
    <div class='Catetory-hotSale-Product'>
      <a href="" v-for='(item, index) in Data' :key='index'>
        <div class='Catetory-hotSale-Product-Img'>
          <!-- <img :src="item.ImageUrl | AnalysisImg" alt=""> -->
          <img v-lazy="item.ImageUrl" alt="">
        </div>
        <div class='Catetory-hotSale-Product-Detial'>
          <div class='recommendtitle'>{{item.Title}}</div>
          <div class='recommendmeno'>{{item.Describe}}</div>
          <div class='recommendprice'>￥{{item.Param1}}</div>
          <div class='button'> 立即抢购</div>
        </div>
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
.Catetory-hotSale{
   box-sizing: border-box;
   overflow: hidden;
  .Catetory-hotSale-Title{
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    box-sizing: border-box;
    margin: 0 0 10/@rem 0;
    margin-top: 15/@rem;
    background: white;
    color: #747474;
    position: relative;
  }
    .Catetory-hotSale-Product{
      overflow: hidden;
    a {
      background: white;
      border-bottom: 1px solid #f6f6f6;
      box-sizing: border-box;
      width: 100%;
      display: block;
      overflow: hidden;
      .Catetory-hotSale-Product-Img {
        width: 320/@rem;
        height: 320/@rem;
        float: left;
        box-sizing: border-box;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          padding: 8/@rem;
          box-sizing: border-box;
        }
      }
      .Catetory-hotSale-Product-Detial {
        width: (750-320)/@rem;
        height: 320/@rem;
        float: left;
        .button {
          width: 140/@rem;
          height: 60/@rem;
          background: #fb8686;
          color: white;
          text-align: center;
          font-size: 26/@rem;
          line-height: 60/@rem;
          border-radius: 4px;
          margin-top: 12/@rem;
          letter-spacing: 4/@rem;
        }
      }
      .recommendtitle {
        margin-top: 50/@rem;
        height: 40/@rem;
        width: 100%;
        font-size: 34/@rem;
        color: #565656;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .recommendmeno {
        height: 70/@rem;
        line-height: 70/@rem;
        width: 100%;
        font-size: 28/@rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #b7b7b7;
      }
      .recommendprice {
        height: 60/@rem;
        line-height: 60/@rem;
        color: #b4282d;
        font-size: 34/@rem;
      }
    }
    }
}
</style>
