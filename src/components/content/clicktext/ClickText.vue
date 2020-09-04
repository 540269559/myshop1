<template>
  <div class="click_text">
    <p class="text">淦！添加成功啦!</p>
  </div>
</template>

<script>
export default {

  name: 'ClickText',

  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="css" scoped>
/*css3*/
@keyframes fadeout{
  0%  {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/**/
.click_text {
  position: absolute;
  top:30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  animation: fadeout 3s ease 1;
}
.text {
  background-color: #FF9999;
  color:black;
  border: 1px solid white;
  padding: 15px;
  font-size: 17px;
  border-radius: 20px;
}
</style>