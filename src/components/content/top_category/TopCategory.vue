<template>
  <div class="top_category">
    <div v-for="(item, index) in titles" class="top_cat_item"  @click="mfy_index(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {

  name: 'TopCategory',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    mfy_index(index) {
      this.currentIndex = index;
      this.$emit('changeGoods', index);
    }
  }
}
</script>

<style lang="css" scoped>
.top_category {
  display: flex;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.top_cat_item {
  flex: 1;

}
.active {
  border-bottom: 3px solid rgb(255, 105, 156);
  color: rgb(255, 105, 156);
}
</style>