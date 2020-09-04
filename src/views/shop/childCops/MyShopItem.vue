<template>
  <div>
    
  <div class="button" @click="choose_shop(item.iid)">
          <img src="~@/assets/img/shop/button.png" v-show="!item.checked">
          <img src="~@/assets/img/shop/button_active.png" v-show="item.checked">
        </div>
        <div class="my_img">
          <img class="img-rounded" :src="item.imgURL" alt="">
        </div>

        <div class="text">
        <div class="title">
          {{item.title}}
        </div>
        <div class="desc">
          {{item.desc}}
        </div>
        <div class="price">
          {{item.newPrice}}<span class="pull-right count">x{{item.count}}</span>
        </div>
          <!-- {{item}} -->
  </div>

  </div>
</template>

<script>
export default {

  name: 'MyShopItem',
  props: {
    item: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  mounted() {

  },
  methods: {
    choose_shop(iid) {
      this.item.checked = !this.item.checked
      
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.my_img {
  width: 80px;
}
img {
  height: 100px;
  /*height: auto;*/
  margin:10px 0 10px 0;
  /*float: left;*/
}
.button {
  line-height: 120px;
  width: 40px;
}
.button img {
  width: 100%;
  height: auto;
  margin: 0;
}
.text {
  width: 180px;
  margin-top: 10px;
  /*margin-left: 10px;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: space-around;*/
}
.title{
  font-size: 15px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  margin-top:5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  margin-top:35px;
  font-size: 18px;
  color:#FF9933;
}
.count {
  font-size: 14px;
  color: black;
  margin-right: 15px;
}
</style>