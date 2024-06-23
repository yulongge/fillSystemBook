<template>
  <div class="content-container">
    <p class="content-title">首页功能介绍</p>
    <div class="content-main">
      <div class="content-intro">
        <p class="intro-title">
          <span>首页</span>
        </p>
        <p class="intro-item">
          <span class="number">01</span>
          首页轮播图
        </p>
        <p class="intro-item intro-desc">展示公司相关宣传页活动</p>
        <p class="intro-item">
          <span class="number">02</span>
          地图组件
        </p>
        <p class="intro-item intro-desc">展示当前人员所负责的设备位置</p>
        <p class="intro-item">
          <span class="number">03</span>
          图标分析
        </p>
        <p class="intro-item intro-desc">弹幕滚动展示报警信息</p>
        <p class="intro-item intro-desc">显示加注设备近一周的数据分析</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/home/home2.png" class="content-img"/>
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

</style>
