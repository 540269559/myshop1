<template>
  <div class="item">
    <div class="img">
      <img class="img-circle" :src="img" alt="">
    </div>
    <div class="content">
      <div class="title">
      <div class="title_content">
        {{title}}
      </div>
      <div class="time">
        {{time}}
      </div>
      </div>
      
      <div class="text">
        {{text}}
      </div>
    </div>
      
  </div>
</template>

<script>
export default {

  name: 'MessageContentItem',
  props: {
    time: {
      type: String,
      default() {
        var myDate = new Date()
        return myDate.getYear().toString().substr(1) + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate()

      }
    },
    title: {
      type: String,
      default() {
        return "标题"
      }
    },
    text: {
      type: String,
      default() {
        return "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
      }
    },
    img: {
      type: String,
      default() {
        return require("@/assets/img/message/people.jpg")
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
.item {
  height:90px;
  /*border: 1px solid black;*/
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  margin-bottom: 5px;
  /*align-items: center;*/
  /*align-content: space-around;*/
}
.img {
  height: 100%;
  margin-left: 20px;
  margin-top: 5px;
}
.img img {
  height: 90%;
}
.content {
  width: 70%;
  /*border: 1px solid black;*/
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top:10px;
  margin:10px 10px 0 5px;
}
.title_content {
  font-size: 18px;
}
.text {
  margin:0 10px 15px 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>