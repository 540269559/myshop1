<template>
    <div id="profile">
      <profile-tab-bar class="profile_bar"/>
      <profile-condition 
      :userName="user.userName"
      :img="user.img"
      :bCoin="user.bCoin"
      :coin="user.coin"
      :fans="user.fans"
      :care="user.care"
      :dynamic="user.dynamic"/>
      <profile-function/>
      <div class="space"></div>
    </div>
</template>

<script>
import ProfileTabBar from './childCops/ProfileTabBar'
import ProfileCondition from './childCops/ProfileCondition'
import ProfileFunction from './childCops/ProfileFunction'
export default {
  name: 'Profile',
  components: {
    ProfileTabBar,
    ProfileCondition,
    ProfileFunction
  },
  data() {
    return {
      user: {
        userName: 'bili1',
        img: require("@/assets/img/profile/bilibili.jpg"),
        bCoin: 10,
        coin: 8,
        fans: 20,
        care: 5,
        dynamic: 6
      }
    }
  }
}
</script>

<style lang="css" scoped>
#profile {
  position: relative;
  height: 100vw;
}
.profile_bar {
  /*display: flex;*/
  position: sticky;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.func {
  position: relative;
}
.space {
  height: 49px;
}
</style>