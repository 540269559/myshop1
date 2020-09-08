<template>
    <div class="god_item" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <p class="god_ele_title">{{goodsItem.title}}</p>
      <div class="god_ele_text">
        <span class="god_ele_content">
          ${{goodsItem.price}} 
        </span>
        <span class="god_ele_people">
          {{goodsItem.cfav}}人付款
        </span>
      </div>
    </div>
  
</template>

<script>
export default {

  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad")
      // if(this.$route.path.indexOf('/home'))
      //   this.$bus.$emit("homeItemImageLoad")
      // else if (this.$route.path.indexOf('/detail'))
      //   this.$bus.$emit("detailItemImageLoad")
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  data () {
    return {

    }
  }
}
const text = document.getElementsByTagName(".god_ele_p")
</script>

<style lang="css" scoped>
.god_item {
  width: 45%;
  text-align: center;
  margin-top:5px;
  background-color: white;
  border-radius: 10px;
  margin:5px 0 5px 0;
}
.god_item img {
  margin-top:5px;
  width: 85%;
  border-radius: 10px;
}
.god_ele_title {
  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  margin:3px 0 3px 0;
  font-size: 15px;
  margin:0 2px 0 2px;
}
.god_ele_content {
  color: rgb(255, 105, 156);
  
  font-size:16px;
}
.god_ele_people {
  color: #777;
  font-size: 14px;
}
.god_ele_text {
  margin:5px 0 5px 0;
}
</style>