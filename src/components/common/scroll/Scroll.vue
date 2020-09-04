<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
      // console.log("123456")
    },
    initScroll() {
        // 1.初始化BScroll对象
        if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })

        // 2.将监听事件回调
        this.scroll.on('scroll', pos => {
          this.$emit('ScrollPos', pos)
        })

        // 3.监听上拉到底部
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载');
          this.$emit('pullingUp')
        })
      },
    },
  mounted() {
    setTimeout(this.initScroll, 20)
    // // 创建对象
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   probeType: this.probeType,
    //   pullUpLoad: this.pullUpLoad,
    //   click: true
    // })
    // this.scroll.refresh()
    // // 监听显示
    // if(this.probeType == 2 || this.probeType == 3){
    //   this.scroll.on('scroll', (position) => {
    //     this.$emit("ScroolPos",position)
    //   })
    // }
    // // 上拉加载
    // if(this. pullUpLoad){
    //   this.scroll.on('pullingUp', () => {
    //     console.log("上拉加载更多")
    //     this.$emit("pullingUp")
    //   })
    // }
  },
}
</script>

<style lang="css" scoped>
</style>