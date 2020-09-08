<template>
  <div class="func_item">
    <div class="img" :style="{backgroundColor: myColor}">
      <img :src="img">
    </div>
    <div class="text">
    {{text}}
    </div>
  </div>
</template>

<script>
export default {

  name: 'FunctionItem',
  props: {
    img: {
      type: String,
      default() {
        return ""
      }
    },
    myColor: {
      type: String,
      default() {
        return "#99CCFF"
      }
    },
    text: {
      type: String,
      default() {
        return "交易物流"
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
.func_item {
  width: 45%;
  margin:5px;
  /*background-color: red*/
  /*border:1px solid black;*/
}
.img {
  width: 50px;
  height: 50px;
  /*background-color:white;*/
  /*height: 20vw;*/
  border-radius: 100px;
  position: relative;
  top:50%;
  transform: translate(0, -50%);
}
.img img{
  width: 50%;
  height:auto;
  position: relative;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.func_item {
  display: flex;
  justify-content: space-between;
  /*background-color: #eee;*/
}
.text {
  font-size:16px;
  line-height: 70px;
  width: 90px;
  text-align: center;
  /*margin-left: 5px;*/
  /*text-align: center;*/
  /*margin-right: 20px;*/
}
</style>