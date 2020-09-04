<template>
  <div class="detail_message">
    <p class="title">{{result.itemInfo.title}}</p>
    <p class="price">
      <span class="now_price">
      {{result.itemInfo.price}} 
      </span>
      <span class="old_price">
      {{result.itemInfo.oldPrice}}
      </span>
      <span class="discount">
        {{result.itemInfo.discountDesc}}
      </span>
    </p>
    <div class="circ">
      <div v-for="(item, index) in result.columns" v-if="index !== 2">
        {{item}}
      </div>
      <div v-for="(item, index) in result.shopInfo.services" v-show="index === result.shopInfo.services.length - 1">
        {{item.name}}
      </div>
    </div>
    <div class="promise">
      <div v-for="(item, index) in result.shopInfo.services" v-show="index !== result.shopInfo.services.length - 1">
        <img :src="'http:'+item.icon" alt="">{{item.name}}
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

  name: 'DetailMessage',
  props: {
    result: {
      type: Object,
      default() {
        return {}
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
.detail_message {
  text-align: left;
  padding:0 8px 0 8px;
}
.title{
  margin:10px 0 10px 0;
  font-size: 16px;
  font-weight: bolder;
}
.now_price {
  color: rgb(255, 105, 156);
  font-size: 20px;
}
.old_price {
  color: #888;
  text-decoration: line-through;
}
.price {
  margin-bottom: 0;
}
.circ {
  display: flex;
  flex:1;
  justify-content: space-between;
  font-size: 11px;
  color:#999;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding:5px 0 5px 0;
  /*background-color: #eee;*/
}
.promise {
  display: flex;
  flex:1;
  justify-content: space-between;
  font-size: 11px;
  color:black;
  border-bottom: 5px solid #eee;
  border-top: 1px solid #eee;
  padding:10px 0 10px 0;
}
.promise img {
  width: 11px;
}
.discount {
  background-color: rgb(255, 105, 156);
  color: white;
  font-size: 11px;
  margin-left:5px;
  border-radius: 10px;
  padding: 3px; 
  display: block;
  /*margin-right: 50%;*/
  float: right;
}
</style>