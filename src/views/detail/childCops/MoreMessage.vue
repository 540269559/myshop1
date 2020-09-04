<template>
  <div class="more_message">
    <!-- <h1>更多详细数据</h1> -->
    <div class="pull-left">
      ————————
    </div>
    <br>
      {{detailInfo.desc}}
    <br>
    <div class="pull-right">
      ————————
    </div>
    <br>
    <div class="text-center item_list" v-for="item in detailInfo.detailImage">
      <h3>{{item.key}}</h3>
      <img v-for="img in item.list" :src="'http:'+img" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {

  name: 'MoreMessage',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad")
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.more_message {
  /*width: 90%;*/
  margin: 0 8px 0 8px;
  padding:0 8px 0 8px;
  padding-top:10px;
  padding-bottom: 30px;
  border-bottom: 5px solid #eee;
  text-align: justify;
  /*background-color: #eee;*/
}
.item_list img {
  width: 100%;
}
.item_list h3 {
  color: rgb(255, 105, 156);
}
</style>