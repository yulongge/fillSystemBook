<template>
  <div class="content-container">
    <p class="content-title">功能介绍</p>
    <p class="content-title">我的页面包含一下功能</p>
    <div class="content-main">
      <div class="content-imgs-preview">
        <img src="../assets/my/index.png" class="content-img-preview"/>
        <img src="../assets/my/userInfo.png" class="content-img-preview"/>
        <img src="../assets/my/userlist.png" class="content-img-preview"/>
        <img src="../assets/my/dept.png" class="content-img-preview"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro">
        <p class="intro-item">首页分为三个模块</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/my/index.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/my/userInfo.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-item">首页分为三个模块</p>
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
.content-container {
  /* height: 80vh; */
  /* overflow-y: auto; */
}
.content-title {

}
.content-main {
  margin-top: 20px;
  border: 1px solid #efefef;
  min-height: 200px;
  display: flex;
  padding: 10px;
}
.content-intro {
  flex: 1;
}
.content-intro-right {
  margin-left: 20px;
}
.content-imgs {
  /* background-color: #1682F9; */
}
.content-imgs-preview {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.content-img {
  width: 250px;
}
.content-img-preview {
  width: 200px;
}
</style>
