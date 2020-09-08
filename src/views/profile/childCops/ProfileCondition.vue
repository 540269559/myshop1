<template>
  <div class="condition">
    <div class="personal">
      <div class="img">
        <img class="img-circle" :src="img" alt="">
      </div>
      <div class="other">
        <div class="user_name">
          {{userName}}
        </div>
        <div class="user_money">
          B币:{{bCoin}} 硬币:{{coin}}
        </div>
      </div>
    </div>
    <div class="message">
      <div class="care">{{dynamic}}<br><span class="user_care">动态</span></div>
      <div class="care_center">{{care}}<br><span class="user_care">关注</span></div>
      <div class="care">{{fans}}<br><span class="user_care">粉丝</span></div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'ProfileCondition',
  props: {
    userName: {
      type: String,
      default() {
        return "bilibili"
      }
    },
    img: {
      type: String,
      default() {
        return require("@/assets/img/profile/bilibili.jpg")
      }
    },
    bCoin: {
      type: Number,
      default() {
        return 0
      }
    },
    coin: {
      type: Number,
      default() {
        return 0
      }
    },
    fans: {
      type: Number,
      default() {
        return 0
      }
    },
    care: {
      type: Number,
      default() {
        return 0
      }
    },
    dynamic: {
      type: Number,
      default() {
        return 0
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
.condition {
  /*border: 1px solid black;*/
  margin: 3%;
  width: 94%;
}
.personal {
  width: 100%;
  display: flex;
}
.other {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user_name {
  font-size: 18px;
}
.user_money {
  font-size: 14px;
}
.img {
  width: 30%;
}
.img img {
  width: 80%;
}

.message {
  display: flex;
  flex:1;
  margin-top:3%;
  justify-content: center;
  text-align: center;
}
.care_center {
  padding-left: 10%;
  padding-right: 10%;
  border-right: 2px solid #eee;
  border-left: 2px solid #eee;
}
.care {
  padding-left: 10%;
  padding-right: 10%;
}
.user_care {
  color: #999;
  width: 50px;
}
</style>