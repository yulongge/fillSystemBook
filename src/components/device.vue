<template>
  <div class="content-container">
    <p class="content-title">加注设备</p>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/device/list.png" class="content-img"/>
        <img src="../assets/device/listEntry.png" class="content-img"/>
        <img src="../assets/device/searchDevice.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>加注设备列表</span>
        </p>
        <p class="intro-item intro-desc">显示所有的加注设备及信息:</p>
        <p class="intro-item intro-desc">网络是否在线，开关状态、流量、计划完成度,网络离线、设备故障、液位过低、温度过低等报警信息等</p>
        <p class="intro-item intro-desc">进行设备添加</p>
        <p class="intro-item intro-desc">进行加注计划添加</p>
        <p class="intro-item intro-desc">进行设备搜索</p>
        <p class="intro-item intro-desc">统计报表</p>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro content-intro-left">
        <p class="intro-title">
          <span>添加加注设备</span>
        </p>
        <p class="intro-item intro-desc">根据页面提示，进行设备添加</p>
        <p class="intro-title">
          <span>设备信息</span>
        </p>
        <p class="intro-item intro-desc">显示检测设备信息，并可以修改，删除，并进行设备分析</p>
        <p class="intro-item intro-desc">远程操控设备</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/device/addDevice.png" class="content-img"/>
        <img src="../assets/device/deviceInfo.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/device/plan.png" class="content-img"/>
        <img src="../assets/device/addPlan.png" class="content-img"/>
        <img src="../assets/device/compare.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>加注计划</span>
        </p>
        <p class="intro-item intro-desc">显示所有加注计划</p>
        <p class="intro-item intro-desc">根据页面提示，添加加注计划</p>
        <p class="intro-item intro-desc">选择不同的加注计划，进行对比，分析加注计划对腐蚀速率的影响</p>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro content-intro-left">
        <p class="intro-title">
          <span>操控设备</span>
        </p>
        <p class="intro-item intro-desc">根据页面提示，进行设备控制相关设置</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/device/operateDevice.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/device/statistic1.png" class="content-img"/>
        <img src="../assets/device/statistic2.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <img src="../assets/device/table1.png" class="content-img content-img-heriz"/>
        <p class="intro-title">
          <span>按条件进行统计报表展示</span>
        </p>
        <p class="intro-item intro-desc">根据条件，统计一段时间内的历史加注数据</p>
        <p class="intro-item intro-desc">支持横屏展示</p>
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
.content-img-heriz {
  width: 500px;
}
.content-intro-right {
  margin-left: 20px;
}
</style>
