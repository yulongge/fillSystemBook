<template>
  <div class="content-container">
    <p class="content-title">首页功能介绍</p>
    <div class="content-main">
      <div class="content-intro">
        <p class="intro-item">首页分为三个模块</p>
        <p class="intro-item">首页轮播图：展示公司相关宣传页活动</p>
        <p class="intro-item">地图组件：展示当前人员所负责的设备位置</p>
        <p class="intro-item">显示监测设备近一周的数据分析</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/home/home.png" class="content-img"/>
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
.content-imgs {
  /* background-color: #1682F9; */
}
.content-img {
  width: 300px;
}
</style>
