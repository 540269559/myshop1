<template>
  <div id="detail">
    <detail-tab-bar class="detail_bar" @itemClick="titleClick" ref="title_bar"></detail-tab-bar>
    <!-- <img v-for="img in topImg" :src="img" alt=""> -->
    
    <scroll 
    class="content" 
    ref="scroll"
    @ScrollPos="contentScroll"
    @pullingUp="pullingUp"
    :probeType="3"
    >
    <!-- <div> -->
      <top-img @detailImgLoad="detailImgLoad" :top_img="topImg" class="top_img" ref="base"></top-img>
      <detail-message :result="result"></detail-message>
      <shop-message :result="result"></shop-message>
      <more-message @detailImgLoad="detailImgLoad" :detailInfo="result.detailInfo"></more-message>
      <item-params :res="result.itemParams" ref="param"></item-params>
      <comment :rate="result.rate" ref="comment"></comment>
      <goods-list class="last" :goods="recommend" ref="recommend"></goods-list>
    <!-- </div> -->
      
    </scroll>

    <back-top ref="back_top" 
    @click.native="back_top()"
    v-show="top_show"
    />
    <!-- </scroll> -->
    
    <detail-bottom-bar @addCart="addToCart" class="bottom_bar">
      
    </detail-bottom-bar>
    <click-text v-show="IsShowMes"></click-text>
    <!-- <ul>
      <li v-for="item in this.$store.state.cartList">
        {{item}}
      </li>
    </ul> -->
  </div>
</template>

<script>

import {itemListenerMixin, backTopItem, home_detail} from "@/common/mixin.js"

import DetailTabBar from "./childCops/DetailTabBar"
import DetailMessage from "./childCops/DetailMessage"
import ShopMessage from "./childCops/ShopMessage"
import MoreMessage from "./childCops/MoreMessage"
import ItemParams from "./childCops/ItemParams"
import Comment from "./childCops/Comment"
import DetailBottomBar from "./childCops/DetailBottomBar"

import GoodsList from "@/components/content/goods/GoodsList"
import ClickText from "@/components/content/clicktext/ClickText"

import TopImg from "./childCops/TopImg"


import {getDetail, getRecommend} from '@/network/detail'
import {debounce} from "@/components/common/tools/tools"

export default {

  name: 'Detail',
  components: {
    DetailTabBar,
    TopImg,
    DetailMessage,
    ShopMessage,
    MoreMessage,
    ItemParams,
    Comment,
    GoodsList,
    DetailBottomBar,
    ClickText,
  },
  mixins: [backTopItem, home_detail],
  data () {
    return {
      iid: null,
      topImg: [],
      itemInfo: null,
      result: null,
      recommend: null,
      itemImgListener: null,
      themeTops: [],
      currentIndex: 0,
      getY: null,
      IsShowMes: false
    }
  },
  mounted() {

  },
  activated() {

  },
  created() {
    this.getDetailData()
    this.getRecommendData()
  },
  destroyed() {

  },
  updated() {

  },
  methods: {
    // 监听详情图片加载完成
    detailImgLoad() {
      // this.refresh()
      this.$refs.scroll.refresh()
      this.getOffsetTops()
    },
    getDetailData() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
      // console.log(res.result.itemInfo)
      this.topImg = res.result.itemInfo.topImages
      this.itemInfo = res.result.itemInfo
      this.result = res.result
      console.log(res)
    })
    },
    pullingUp() {

    },
    getRecommendData() {
      // 请求推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.list
        // console.log(res)
      })
    },
    getOffsetTops() {
      this.themeTops = []
      this.themeTops.push(0)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTops)
      this.themeTops.push(Number.MAX_VALUE)
      // console.log(this.themeTops)
    },
    contentScroll(position) {
      // backtop 相关内容
      this.position_y = position.y
      if(position.y < -1000)
        this.top_show = true
      else 
        this.top_show = false

      const positionY = -position.y
      // 1.监听backTop的显示
      // this.showBackTop = position.y < -1000

      // 2.监听滚动到哪一个主题
      // this.listenScrollTheme(-position.y)
      // console.log(this.themeTops)
      // console.log(positionY)

      for (let i = 0; i < this.themeTops.length; i++){
        if(positionY >= this.themeTops[i] &&
         positionY < this.themeTops[i + 1]){
          // console.log(i)
        if (this.$refs.title_bar.currentIndex != i) {
         this.$refs.title_bar.currentIndex = i;
         // console.log("变色")
        }
        }
      }
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
    },


    addToCart() {
      this.IsShowMes = true;
      setTimeout(() => {
        this.IsShowMes = false;
      },3000)
        // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImg[0]
        obj.title = this.result.itemInfo.title
        obj.desc = this.result.itemInfo.desc;
        obj.newPrice = this.result.itemInfo.price;
        // 3.添加到Store中
        this.$store.commit('addCart', obj)
      },
    listenScrollTheme(position) {
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          let iPos = this.themeTops[i];
          /**
           * 判断的方案:
           *  方案一:
           *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
           *    优点: 不需要引入其他的内容, 通过逻辑解决
           *    缺点: 判断条件过长, 并且不容易理解
           *  方案二:
           *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
           *    优点: 简洁明了, 便于理解
           *    缺点: 需要引入一个较大的int数字
           * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
           * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
           */
          if (position >= iPos && position < this.themeTops[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
      },
  }
}
</script>

<style lang="css" scoped>
#detail {
  height: 100vh;
  margin-bottom: 46px;
  position: relative;
}
.content {
  background-color: #fff;
  height: calc(100% - 44px - 49px);
  margin-top:44px;
}
.detail_bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: white;
}
.top_img {
  /*margin-top:44px;*/
}
.content {
  position: flex;
  top:44px;
  bottom: 49px;
  /*margin-bottom: 49px;*/
  left: 0;
  right: 0;
}
/*.content1 {
  position: absolute;
  top:44px;
  bottom: 0;
  left: 0;
  right: 0;
}*/
.last {
  /*margin-bottom: 49px;*/
}
.bottom_bar {

}
</style>