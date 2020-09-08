<template>
  <div class="col-md-3 col-xs-3 function_item">
    <img :src="img" alt="">
    <div class="text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {

  name: 'FunctionItem',
  props: {
    text: {
      type: String,
      default() {
        return "离线缓存"
      }
    },
    img: {
      type: String,
      default() {
        return require("@/assets/img/profile/func_first/download.png")
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.function_item {
  /*background-color: #eee;*/
  margin-top:5px;
  padding: 0;
}
.function_item img {
  width: 43%;
  position: relative;
  left: 50%;
  transform: translate(-45%, 0);
}
.text {
  margin-top:5px;
  text-align: center;
  font-size: 12px;
}
</style>