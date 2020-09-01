<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~/@/assets/img/home/holiday.jpg" alt="" @load="imgLoad()">
    </a>
  </div>
</template>

<script>
export default {

  name: 'Feature',

  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.isLoad = true
        this.$emit("feaImgLoad")
      }
    }
  }
}
</script>

<style lang="css" scoped>
.feature img{
  width: 100%;
}
</style>