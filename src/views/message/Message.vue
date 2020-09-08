<template>
    <div id="message">
        <nav-bar class="mes_tab_bar">
            <div slot="center">
              信息
            </div>
        </nav-bar>
        <scroll class="content" ref="scroll">
          <message-function></message-function>
          <message-content></message-content>
        </scroll>
          
    </div>
  
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

// import BScroll from 'better-scroll'
import Scroll from "@/components/common/scroll/Scroll"

import MessageFunction from './childCops/MessageFunction'
import MessageContent from './childCops/MessageContent'



export default {

  name: 'Message',
  components: {
    MessageFunction,
    MessageContent,
    NavBar,
    Scroll
  },
  methods: {
    contentScroll() {

    },
    pullingUp() {

    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted() {
    // this.$refs.scroll.refresh()
  }
}
</script>

<style lang="css" scoped>
#message {
  height: 100%;
}
.wrapper {
  /*height:150px;*/
  /*background-color: red;*/

  /*overflow: hidden;*/
  /*overflow-y: scroll;*/
}
.mes_tab_bar {
    background-color: rgb(153, 204, 204);
    font-size: 16px;
    color: white;
    position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  height: calc(100% - 44px - 49px);
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>