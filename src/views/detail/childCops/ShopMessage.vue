<template>
  <div class="shop_message">
    <div>
      <div>
      <img class="img-circle" :src="'http:'+result.shopInfo.shopLogo" alt="">
        <span class="store_name">{{result.shopInfo.name}}</span>
      </div>
      <div class="store_detail box1">
        <div class="store_detail_sell box1">
        {{(result.shopInfo.cSells / 10000).toFixed(1)}}万<br>
        <span>总销量</span>
        </div>

        <div class="store_detail_goods box1">
        {{result.shopInfo.cGoods}}<br>
        <span>全部宝贝</span>
        </div>

        <div class="store_detail_message box1">
        <div class="desc_item" v-for="item in result.shopInfo.score">
          {{item.name}} 
          <span :class="[{score: item.isBetter}, {low_score: !item.isBetter}]">{{(item.score).toFixed(1)}} </span>
          <span :class="[{grade: item.isBetter}, {low_grade: !item.isBetter}]">
          {{item.isBetter ? '高' : '低'}}
          </span>
        </div>
        </div>
      </div>
      <div class="enter_shop">
        <button type="" class="btn btn-default btn-sm" disabled="disabled">进店逛逛</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'ShopMessage',
  props: {
    result: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.shop_message img {
  width: 18%;
  border: 1px solid #888;
}
.shop_message {
  /*width: 90%;*/
  margin: 0 8px 0 8px;
  padding:0 8px 0 8px;
  padding-top:10px;
  padding-bottom: 10px;
  border-bottom: 5px solid #eee;
  /*background-color: #eee;*/
}
.store_name {
  font-size: 16px;
  line-height: 60px;
  color: #666;
}
.store_detail {
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 10px 0;
}
.box1 {
  /*border: 1px solid black;*/
}
.store_detail_sell, .store_detail_goods {
  font-size: 18px;
  text-align: center;
}
.store_detail_goods {
  padding-right: 15px;
  border-right: 3px solid #eee;
}
.box1 span {
  font-size: 14px
}
.desc_item {
  margin-top:5px;
}
.score {
  color: rgb(255, 105, 156);
}
.low_score {
  color: #99CC66;
}
.grade{
  background-color: #FF6666;
  color:white;
  padding: 3px;
}
.low_grade{
  background-color: #99CC66;
  color:white;
  padding: 3px;
}
.store_detail_message {
}
.enter_shop {
  text-align: center;
}
.enter_shop button{
  /*background-color: red;*/
}
</style>