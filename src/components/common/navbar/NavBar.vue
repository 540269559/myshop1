<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

  name: 'NavBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .nav-bar {
    display: flex;
    height: 44px;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    line-height: 44px;
    /*box-shadow: 0 0 1px rgba(100, 100, 100, 0.8);*/
  }
</style>