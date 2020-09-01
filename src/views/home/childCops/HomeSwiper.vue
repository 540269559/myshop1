<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a slot="swi_link" :href="item.link">
        <img slot="swi_img" :src="item.image" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper/index.js"
export default {

  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
      banners: {
        type: Array, 
        default() {
          return []
        }
      }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      // if(!this.isLoad) {
      //   this.$emit("swiperImgLoad")
      //   this.isLoad = true
      // }
    }
  }
}
</script>

<style lang="css" scoped>
</style>