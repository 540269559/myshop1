<template>
  <div class="swi_img">
    <slot name="swi_img">
      <slot name="swi_link"></slot>
    </slot>
  </div>
  <!-- <div class="swi_img">
      <img src="~@/assets/img/swiper/timg.jpg" alt="">
    </div>
    <div class="swi_img">
      <img src="~@/assets/img/swiper/timg.jpg" alt="">
    </div>
    <div class="swi_img">
      <img src="~@/assets/img/swiper/timg.jpg" alt="">
    </div>
    <div class="swi_img">
      <img src="~@/assets/img/swiper/timg.jpg" alt="">
  </div> -->
</template>

<script>
export default {

  name: 'SwiperItem',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

  .swi_img {
    width: 48%;
    height: 46%;
  }
  .swi_img img {
    width: 100%;
    height: auto;
  }
</style>