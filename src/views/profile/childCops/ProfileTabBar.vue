<template>
  <div class="navbar">
    <nav-bar>
      <div slot="center">
        我的
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {

  name: 'ProfileTabBar',
  components: {
    NavBar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.navbar {
  background-color: rgb(251, 114, 153);
  color:white;
  font-size: 16px;
}
</style>