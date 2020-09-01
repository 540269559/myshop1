<template>
  <tab-bar class="main_tab_bar">
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/message" activeColor="deepPink">
        <img slot="item-icon" src="~@/assets/img/tabbar/message.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/message-active.svg" alt="">
        <div slot="item-text">
          信息
        </div>
      </tab-bar-item>
      <tab-bar-item path="/shop" activeColor="deepPink">
        <img slot="item-icon" src="~@/assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/shop-active.svg" alt="">
        <div slot="item-text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/profile-active.svg" alt="">
        <div slot="item-text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"
export default {

  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }, 
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.main_tab_bar {
  z-index: 6;
}
</style>