<template>
  <div class="mes_func">
    <function-item v-for="(project, key) in item" :myColor="project.color" :text="project.text" :img="project.img" :key="key"></function-item>
  </div>
</template>

<script>
import FunctionItem from "./FunctionItem"
export default {

  name: 'MessageFunction',
  components: {
    FunctionItem
  },
  data () {
    return {
      item: [
        {
          img: require("@/assets/img/message/logistics_white.png"),
          text: '交易物流',
          color: 'rgb(153, 204, 255)' 
        },
        {
          img: require("@/assets/img/message/activity.png"),
          text: '活动优惠',
          color: 'orange'
        },
        {
          img: require("@/assets/img/message/notice.png"),
          text: '服务通知',
          color: '#FF6666'
        },
        

      ]
    }
  },

}
</script>

<style lang="css" scoped>
.mes_func {
  background-color: white;
  margin:10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  box-shadow: 0px 0px 10px #999;
}
</style>