<template>
  <div class="content-container">
    <p class="content-title">登录</p>
    <p class="content-title">登录页面包含一下功能</p>
    <div class="content-main">
      <div class="content-imgs-preview">
        <img src="../assets/login/index.png" class="content-img-preview"/>
        <img src="../assets/login/regist.png" class="content-img-preview"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuComp',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.content-container .content-imgs-preview{
  justify-content: space-around;
}
</style>
