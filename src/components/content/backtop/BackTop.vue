<template>
  <div class="back_top">
    <img src="~@/assets/img/backtop/top.png">
  </div>
</template>

<script>
export default {

  name: 'BackTop',

  data () {
    return {
      top_show: false
    }
  }
}
</script>

<style lang="css" scoped>
.back_top {
  position: absolute;
  bottom: 47px;
  right: 10px;
  width: 12%;
  background-color: white;
  border-radius: 100px;
}
.back_top img {
  width: 100%;
}
</style>