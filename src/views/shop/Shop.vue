<template>
  <div id="shop">
      <nav-bar class="shop_bar">
        <div slot="center">
          购物车({{cartCount}})
        </div>
      </nav-bar>

      <!-- 商品列表 -->
      <my-shop></my-shop>

      <!-- 计算总价格 -->
      <all-price></all-price>


  </div>
</template>

<script>
import MyShop from './childCops/MyShop'
import AllPrice from './childCops/AllPrice'

import NavBar from '@/components/common/navbar/NavBar'

import {mapGetters} from 'vuex'

export default {

  name: 'Shop',
  components: {
    MyShop,
    AllPrice,
    NavBar
  },
  computed: {
    ...mapGetters({
      cartCount:'cartCount', 
      cartList:'cartList'
    }),
  },
  created() {
    this.$buy.price = 0
    // console.log(this.$buy.price)
  },
  mounted() {
    this.add_price(this.$buy.price)
  },
  data() {
    return {
      allPrice: 0
    }
  },
  methods: {
    add_price(money) {
      this.allPrice = money
    }
  }
}
</script>

<style lang="css" scoped>
.shop_bar {
  background-color: #99CCCC;
  font-size: 18px;
}
#shop {
  height: 100vh;
  position: relative;
}

</style>