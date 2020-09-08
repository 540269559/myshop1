<template>
  <div class="content1">
    <message-content-item v-for="(project, key) in item" 
    :title="project.title"
    :text="project.text"
    :img="project.img"
    :time="project.time"
    :key="key">
      
    </message-content-item>
  </div>
</template>

<script>
import MessageContentItem from './MessageContentItem'
export default {

  name: 'MessageContent',
  components: {
    MessageContentItem
  },
  data () {
    return {
      item: [
        {
          title: '三只松鼠',
          text: '有朋自远方来不亦月乎！限量送同款',
          time: '20/9/7',
          img: require('@/assets/img/message/food.jpg')
        },
        {
          title: '淘宝团队',
          text: '7月男童8月27日走失，距离您500公里，点击查看详情',
          time: '20/9/7',
          img: require('@/assets/img/message/taobao.jpg')
        },
        {
          
        },
        {
          title: '淘宝团队',
          text: '7月男童8月27日走失，距离您500公里，点击查看详情',
          time: '20/9/7',
          img: require('@/assets/img/message/taobao.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.content1 {
  margin:10px 10px 0 10px;
}
</style>