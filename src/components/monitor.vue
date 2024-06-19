<template>
  <div class="content-container">
    <p class="content-title">监测设备</p>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/monitor/monitorList.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>监测设备列表</span>
        </p>
        <p class="intro-item intro-desc">显示所有的监测设备及信息</p>
        <p class="intro-item intro-desc">进行设备添加</p>
        <p class="intro-item intro-desc">对设备进行分析</p>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro content-intro-left">
        <p class="intro-title">
          <span>添加监测设备</span>
        </p>
        <p class="intro-item intro-desc">根据页面提示，进行设备添加</p>
        <p class="intro-title">
          <span>设备信息</span>
        </p>
        <p class="intro-item intro-desc">显示检测设备信息，并可以修改，删除，并进行设备分析</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/monitor/addMonitor.png" class="content-img"/>
        <img src="../assets/monitor/monitorDetail.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/monitor/analysis.png" class="content-img"/>
        <img src="../assets/monitor/analysicFilter.png" class="content-img"/>
        <img src="../assets/monitor/analysisResult.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>设备数据分析</span>
        </p>
        <p class="intro-item">
          分析条件：
        </p>
        <p class="intro-item">日期期间</p>
        <p class="intro-item">数据指标</p>
        <p class="intro-item intro-desc">根据选择的日期期间和数据指标进行数据分析</p>
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
</style>
