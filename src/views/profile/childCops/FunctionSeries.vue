<template>
  <div class="container-fluid series">
    <function-item v-for="(item, key) in series"
    :img="item.img"
    :text="item.text"
    :key="key"/>
  </div>
</template>

<script>
import FunctionItem from './FunctionItem'
export default {

  name: 'FunctionSeries',
  components: {
    FunctionItem
  },
  props: {
    series: {
      type: Array,
      default() {
        return []
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
.container-fluid {
  /*border:1px solid black;*/
}
.series {
  padding: 0;
  margin-top:5px;
}
</style>