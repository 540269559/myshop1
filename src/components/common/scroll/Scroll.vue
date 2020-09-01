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
    scrollTo(x, y, t = 500) {
      this.scroll && this.scroll.scrollTo(x, y, t)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      console.log("-----")
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    // 创建对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    this.scroll.refresh()
    // 监听显示
    if(this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit("ScroolPos",position)
      })
    }
    // 上拉加载
    if(this. pullUpLoad){
      this.scroll.on('pullingUp', () => {
        console.log("上拉加载更多")
        this.$emit("pullingUp")
      })
    }
  },
}
</script>

<style lang="css" scoped>
</style>