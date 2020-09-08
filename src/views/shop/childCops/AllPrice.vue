<template>
  <div class="bottom_bar">
    <div class="button" @click="change_all()">
      <img src="~@/assets/img/shop/button_active.png" v-show="IsAll">
      <img src="~@/assets/img/shop/button.png" v-show="!IsAll">全选
    </div>
    <div class="total_price">总价{{totalPrice}}</div>
    <div class="payment">立即支付</div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {

  name: 'AllPrice',
  props: {
    allPrice: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  computed: {
    totalPrice() {
      return (this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + (parseFloat(item.newPrice.substr(1))) * item.count
      }, 0)).toFixed(2)
    }
  },
  mounted() {

  },
  data () {
    return {
      IsAll: false,
      product: null
    }
  },
  methods: {
    change_all() {
      this.IsAll = !this.IsAll
      if(this.IsAll)
        this.$store.commit('changeCheck', 1)
      else
        this.$store.commit('changeCheck', 0)
      // if(this.IsAll) {
      // for (var i in this.$store.state.cartList) {
      //   if(!this.$store.state.cartList[i].checked)
      //     this.$store.state.cartList[i].checked = true
      //   }
      // }
      // else {
      // for (var i in this.$store.state.cartList) {
      //   if(this.$store.state.cartList[i].checked)
      //     this.$store.state.cartList[i].checked = false
      //   }
      // }
    }
  }
}
</script>

<style lang="css" scoped>
.bottom_bar {
  position: fixed;
  bottom: 49px;
  height:49px;
  width: 100%;
  background-color: #eee;
  z-index: 12;
  display: flex;
  justify-content: space-around;
  line-height: 49px;
  text-align: center;
}
.button img {
  width: 30px;
}
.total_price, .payment {
  font-size: 18px;
}
.total_price{
  width: 50%;
}
.button {
  width: 20%;
}
.payment {
  background-color: #FFCC00;
  width: 30%;
}
</style>