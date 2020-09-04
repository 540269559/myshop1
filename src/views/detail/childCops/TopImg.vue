<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="2000">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li v-for="(item, index) in top_img"
     data-target="#carousel-example-generic" 
     :data-slide-to="index" 
     :class="{active: index === 0}"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item" 
    :class="{active: index === 0}" 
    v-for="(item, index) in top_img">
      <img :src="item" class="center-block" @load="detailImgLoad">
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  </a>
  <a id="right" class="right carousel-control" href="#carousel-example-generic" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  </a>
</div>
</template>

<script>
export default {

  name: 'TopImg',
  props: {
    top_img: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    detailImgLoad() {
      this.$emit("detailImgLoad")
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.item {
  text-align: center;
}
.item img {
  width: 100%;
  /*transform: translate(0, -20%);*/
}
.carousel-inner {
  height: 300px;
}
#carousel-example-generic {
}
</style>