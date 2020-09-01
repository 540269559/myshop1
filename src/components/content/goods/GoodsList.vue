<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goods-item="item" :key="index">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
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
.goods {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #eee;
  justify-content: space-around;
  align-content: stretch;
  flex-direction: row;
  flex: 1;
}
</style>