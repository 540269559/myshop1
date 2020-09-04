import {debounce} from "@/components/common/tools/tools"


import BackTop from '@/components/content/backtop/BackTop'
import Scroll from "@/components/common/scroll/Scroll"


export const itemListenerMixin = {
  mounted() {
    // console.log(this.$refs.scroll.refresh)
    // 图片加载完成事件监听
    const refresh1 = debounce(this.$refs.scroll.refresh, 200)
    // console.log(refresh1)
    // 对监听事件进行保存
    this.itemImgListener =  () => {
      // this.$refs.scroll.refresh();
      refresh1()
    }
    // 监听图片加载完成
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    console.log("混入")
  },
  
}
export const backTopItem = {
  data() {
    return {
      top_show: false
    }
  },
  methods: {
    back_top() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }
}
export const home_detail = {
  components: {
    Scroll,
    BackTop
  }
}