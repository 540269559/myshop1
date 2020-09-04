<template>
    <div id="home">

      <!-- 顶部导航栏 -->
      <nav-bar class="home_bar">
        <div slot="center">
          游戏商品
        </div>
      </nav-bar>
      
      <top-category 
      class="top_category_control" 
      :titles="['流行', '新款', '最新']" 
      @changeGoods="changeGoods"
      @top_catimgLoad="top_catimgLoad()"
      v-show="ifShow"
      ref="top_cat1"/>

      <scroll class="content" 
      ref="scroll" 
      :probeType="3" 
      :pullUpLoad="true"
      @pullingUp="loadmore()"
      @back_top="back_top()"
      @ScrollPos="ScrollPos">  

      <!-- 大模块 -->
      <home-swiper class="swiper" 
      :banners="banners" 
      ref="swiper"/>
      
      <!-- 推荐信息 -->
      <recommend-mes :recommends="recommends"/>

      <!-- 每周推荐 -->
      <feature ref="fea" @feaImgLoad="feaImgLoad()"/>
      

      <top-category 
      class="top_category" 
      :titles="['流行', '新款', '最新']" 
      @changeGoods="changeGoods" 
      ref="top_cat" 
      @top_catimgLoad="top_catimgLoad()"
      />

      <goods-list :goods="goods[goods_type].list" ref="goods_list"/>
      
      </scroll>
      <back-top ref="back_top" @click.native="back_top()" v-show="top_show"/>
      <br>
      <br>
    </div>
</template>

<script>
import {itemListenerMixin, backTopItem, home_detail} from "@/common/mixin.js"

import NavBar from "@/components/common/navbar/NavBar"


import TopCategory from '@/components/content/top_category/TopCategory'
import GoodsList from "@/components/content/goods/GoodsList"



import HomeSwiper from './childCops/HomeSwiper'
import RecommendMes from './childCops/RecommendMes'
import Feature from './childCops/Feature'

import {
  getHomeMultidata, 
  getHomeGoods
} from "@/network/home"
import {debounce} from "@/components/common/tools/tools"

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendMes,
    Feature,
    TopCategory,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      goods_type: 'pop',
      control_top_cat: 0,
      ifShow: false,
      position_y: 0,
      point_y: 0,
      itemImgListener: null
    }
  },
  mixins: [itemListenerMixin, backTopItem, home_detail],
  created() {
    // 请求多个数据
    this.getHomeData()
    // 
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')

  },
  destroyed() {
    console.log("销毁")
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.point_y)
  },
  deactivated() {
    // 1.保存y
    this.point_y = this.position_y

    // 
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  mounted() {

  },
  methods: {
    /*
      事件监听相关方法
    */
    ScrollPos(position) {
      this.position_y = position.y
      if(position.y < -1000)
        this.top_show = true
      else 
        this.top_show = false
      if(position.y < -494)
        this.ifShow = true
      else 
        this.ifShow = false
      // console.log(position.y)
    },
    loadmore() {
      this.getHomeGoodsData(this.goods_type)
      
    },
    feaImgLoad() {

    },
    /*
      事件相关方法
    */
    changeGoods(index) {
      switch(index) {
        case 0:
          this.goods_type = 'pop';
          break;
        case 1:
          this.goods_type = 'new';
          break;
        case 2:
          this.goods_type = 'sell';
          break;
        default:
          break;
      }
      this.$refs.top_cat1.currentIndex = index
      this.$refs.top_cat.currentIndex = index
    },
    /*
      网络请求相关方法
    */
    getHomeData() {
      getHomeMultidata().then(res => {
        // this.res = res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res)
      })
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // this.goods[type].list.push(...res.data.list)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // console.log(res)

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style lang="css" scoped>
#home {
  height: 100vh;
  position: relative;
}
.home_bar {
  background-color: #99CCCC;
  color: white;
  /*position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;*/
}
/*.swiper {
  margin-top: 44px;
}*/
.top_category {
  background-color: #eee;
}
.content {
  /*height: calc(100% - 93px);*/
  overflow: hidden;
  /*margin-top: 44px;*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  /*transform: translate(0, 0);*/
}
.top_category_control {
  position: relative;
  z-index: 9;
  
}
</style>