<template>
  <div>
    <scroll class="content">
      <div>
        
    <my-shop-item 
    class="my_shop_item" 
    v-for="(item, index) in cartList" :item="item" 
    :key="index">
        
      </my-shop-item>
      </div>
      
      </scroll>
  </div>
  
</template>

<script>
import MyShopItem from './MyShopItem'

import Scroll from "@/components/common/scroll/Scroll"

import {mapGetters} from 'vuex'

// import {getters} from 'vuex'
export default {

  name: 'MyShop',
  components: {
    MyShopItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.my_shop_item {
  height: 120px;
  width: 98%;
  margin: 2% 1% 0 1%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: #eee;
}
.content {
  height: calc(100% - 44px - 49px - 49px);
  overflow: hidden;
  /*margin-top: 44px;*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>