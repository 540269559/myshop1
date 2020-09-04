<template>
  <div class="comment">
    <h4>用户评论<span class="pull-right">更多</span></h4>
    <div class="content" v-for="item in rate.list">
      <div class="user box1">
        <span><img class="img-circle" :src="'http:'+item.user.avatar" alt=""></span>&nbsp;&nbsp;
        <span>{{item.user.uname}}</span>
      </div>
      <div class="user_message box1">
        <span>
          {{item.content}}
        </span>
      </div>
      <div class="other_message box1">
        {{item.created | showDate}} {{item.style}}
      </div>
      <div class="other_img box1">
        <img v-for="img in item.images" :src="'http:'+img" alt="">
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import {formatDate} from '@/components/common/tools/tools'
export default {

  name: 'Comment',
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date)
    }
  }
}
</script>

<style lang="css" scoped>
.comment {
  border-top: 5px solid #eee;
  margin: 0 8px 0 8px;
  padding:0 8px 0 8px;
  /*border-bottom: 2px solid red;*/
  color: #777;
}
.content {
  border-top: 3px solid #eee;
}
h4 {
  color: #888;
  padding: 8px 0 8px 0;
}
.box1 {
  /*border: 1px solid black;*/
}
.user img {
  width: 20%;
}
.user {
  margin-top: 10px;
}
.user_message {
  margin:8px 0 8px 0;
  color: black;
}
.other_message {
  margin-bottom: 8px;
}
.other_img img {
  width: 25%;
}
</style>