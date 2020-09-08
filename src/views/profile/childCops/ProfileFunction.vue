<template>
  <div class="function">
    <div class="text">
      我的功能
    </div>
    <function-series :series="firstSeries"/>
    <div class="text">
      创作中心
    </div>
    <function-series :series="secondSeries"/>
    <div class="text">
      推荐服务
    </div>
    <function-series :series="thirdSeries"/>
  </div>
</template>

<script>
import FunctionSeries from './FunctionSeries'
export default {

  name: 'ProfileFunction',
  components: {
    FunctionSeries
  },
  data () {
    return {
      firstSeries: [
        {
          img: require("@/assets/img/profile/func_first/download.png"),
          text: '离线下载'
        },
         {
          img: require("@/assets/img/profile/func_first/history.png"),
          text: '历史记录'
        },
         {
          img: require("@/assets/img/profile/func_first/collection.png"),
          text: '我的收藏'
        },
         {
          img: require("@/assets/img/profile/func_first/play.png"),
          text: '稍后再看'
        },
      ],
      secondSeries: [
        {
          img: require("@/assets/img/profile/func_first/lights.png"),
          text: '创作首页'
        },
         {
          img: require("@/assets/img/profile/func_first/robot.png"),
          text: '创作学院'
        },
         {
          img: require("@/assets/img/profile/func_first/date.png"),
          text: '创作日历'
        },
         {
          img: require("@/assets/img/profile/func_first/flag.png"),
          text: '热门活动'
        },
      ],

      thirdSeries: [
        {
          img: require("@/assets/img/profile/func_third/course.png"),
          text: '我的课程'
        },
        {
          img: require("@/assets/img/profile/func_third/wifi.png"),
          text: '免流量服务'
        },
        {
          img: require("@/assets/img/profile/func_third/personal.png"),
          text: '个性装扮'
        },
        {
          img: require("@/assets/img/profile/func_third/red_envelope.png"),
          text: '赚红包'
        },
        {
          img: require("@/assets/img/profile/func_third/game.png"),
          text: '游戏中心'
        },
        {
          img: require("@/assets/img/profile/func_third/wallet.png"),
          text: '我的钱包'
        },
        {
          img: require("@/assets/img/profile/func_third/shopping.png"),
          text: '会员购中心'
        },
        {
          img: require("@/assets/img/profile/func_third/tv.png"),
          text: '直播中心'
        },
        {
          img: require("@/assets/img/profile/func_third/comments.png"),
          text: '反馈论坛'
        },
        {
          img: require("@/assets/img/profile/func_third/gift.png"),
          text: '充能领福利'
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.function {
  margin:10px;
}
.text {
  font-weight: bold;
  margin-top:20px;
}
</style>