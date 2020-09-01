<template>
  <div id="detail">
    <detail-tab-bar></detail-tab-bar>
    <!-- <img v-for="img in topImg" :src="img" alt=""> -->
    <top-img :top_img="topImg"></top-img>






  </div>
</template>

<script>
import DetailTabBar from "./childCops/DetailTabBar"
import TopImg from "./childCops/TopImg"
import {getDetail} from '@/network/detail'
export default {

  name: 'Detail',
  components: {
    DetailTabBar,
    TopImg
  },
  data () {
    return {
      iid: null,
      topImg: null
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      console.log(res)
      this.topImg = res.result.itemInfo.topImages
      console.log(this.topImg)
    })
  }
}
</script>

<style lang="css" scoped>
</style>