<template>
  <div class="bottom_bar">
    <div class="box1 ask text-center" @click="ChangeAsk()">
    <img src="~@/assets/img/detail/ask_active.png" alt="" class="icon" v-show="Isask">
    <img src="~@/assets/img/detail/ask.png" alt="" class="icon" v-show="!Isask"><br>客服
    </div>
    <div class="box1 shop text-center" @click="EnterShop()">
    <img src="~@/assets/img/detail/shop_active.png" alt="" class="icon"><br>店铺
    </div>
    <div class="box1 collect text-center" @click="ChangeCollect()">
      <img src="~@/assets/img/detail/collect_active.png" alt="" class="icon" v-show="Iscollect">
    <img src="~@/assets/img/detail/collect.png" alt="" class="icon" v-show="!Iscollect"><br>收藏
    </div>
    <div class="box2 join text-center" @click="addCart()">
      加入购物车
    </div>
    <div class="box2 buy text-center">
      购买
    </div>
  </div>
</template>

<script>
export default {

  name: 'DetailBottomBar',
  methods: {
    ChangeCollect() {
      if(this.Iscollect)
        alert("取消收藏成功")
      else 
        alert("收藏成功")
      this.Iscollect = !this.Iscollect
    },
    ChangeAsk() {
       if(this.Isask)
        alert("取消呼叫成功")
      else 
        alert("呼叫客服")
      this.Isask = !this.Isask
    },
    EnterShop() {
      alert("进入店铺")
    },
    addCart() {
      this.$emit("addCart")
    }
  },
  data () {
    return {
      Iscollect: false,
      Isask: false,
      Isshop: false
    }
  }
}
</script>

<style lang="css" scoped>
.bottom_bar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: #eee;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  flex:1;
}
.box1{
  width: 17.3%;
  font-size: 14px;
  /*border: 1px solid black;*/
}
.box1 img {
  margin-top:3px;
  width: 41%;
}
.box2 {
  width: 24%;
  /*border: 1px solid black;*/
  line-height: 49px;
}
.buy {
  background-color: rgb(255, 105, 156);
  color: white;
  font-size: 17px;
}
.join {
  background-color: #FFCC33;
  color: black;
  font-size: 14px;
}
</style>