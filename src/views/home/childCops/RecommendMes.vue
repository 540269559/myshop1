<template>
  <div class="recommend_mes">
    <div class="recommend_mes_item" v-for="item in recommends">
      <a href="" :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RecommendMes',
  props: {
    recommends: {
      recommends: {
        type: Array,
        default() {
          return []
        }
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
  .recommend_mes{
    margin-top:0.5%;
    display: flex;
    justify-content: space-around;
    height: 10%;
    border-bottom: 8px solid #eee;
    border-top: 8px solid #eee;
  }
  .recommend_mes_item {
    width: 20%;
  }
  .recommend_mes img {
    height:auto;
    width: 100%;
  }
  .recommend_mes p {
    text-align: center;
    margin:0;
  }
</style>