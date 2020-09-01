<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {

  name: 'Swiper',

  data () {
    return {

    }
  }
}
</script>
  
<style lang="css" scoped>
  .swiper {
    width: 100%;
    padding-top: 1%;
    padding-bottom: 0.5%;
    display: flex;
    background-color: #FFCC99;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
</style>