<template>
  <div class="detail_tab_bar">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~@/assets/img/detail/back.png" @click="backClick">
      </div>
      <div slot="center" class="title">
        <div v-for="(title, index) in titles" 
        class="title_item" 
        :class="{active: index === currentIndex}"
        @click="title_click(index)">
          {{title}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar"
export default {

  name: 'DetailTabBar',
  components: {
    NavBar
  },
  methods: {
    title_click(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  }
}
</script>

<style lang="css" scoped>
.title {
  display: flex;
}
.title_item {
  flex: 1;
  font-size: 13px;
}
.active {
  color:rgb(255, 105, 156);
}
.back {
  text-align: center;
  margin-top: 10px;
  /*border-bottom: 1px solid #eee;*/
  /*background-color: #eee;*/
}
.back img {
  width: 40%;
}
.detail_tab_bar {
  /*display: flex;*/
  /*top:0;
  z-index: 9;*/
}
</style>