<template>
  <div class="content-container">
    <p class="content-title">产品介绍</p>
    <p class="content-intro">
      欢迎体验全新升级的智能加注系统App，一款集高效、便捷、智能于一体的设备管理与远程控制工具。本App以用户需求为核心，通过先进的技术手段，为您提供一站式加注设备解决方案
    </p>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>一、首页概览</span>
      </p>
      <p>打开App，首先映入眼帘的是简洁明了的首页。在这里，您可以快速查看设备的整体运行状态、加注进度以及实时数据。通过直观的图表和数据分析，您可以轻松掌握加注设备的整体情况，为您的决策提供有力支持。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>二、监测设备</span>
      </p>
      <p>进入监测设备模块，您可以实时查看每台加注设备的详细数据，包括加注量、压力、温度等关键参数。同时，该模块还具备异常预警功能，一旦设备出现异常，系统将立即推送通知，确保您能够及时处理。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>三、加注设备</span>
      </p>
      <p>在加注设备模块，您可以远程控制加注设备的开关、调节加注速度和设定加注量。通过简单的操作，即可实现设备的自动化管理，大大提高工作效率。此外，该模块还支持多设备同时管理，让您轻松应对复杂的加注任务。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>四、我的页面</span>
      </p>
      <p>我的页面是您的个人管理中心，您可以在这里进行人员、部门以及个人信息的管理。通过添加、编辑和删除操作，您可以轻松构建自己的组织架构，并为不同角色分配相应的权限。同时，该页面还提供了丰富的个性化设置选项，让您的使用体验更加贴心。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>五、数据分析</span>
      </p>
      <p>智能加注系统App还具备强大的数据分析功能。通过收集和分析历史数据，您可以深入了解设备的运行状况、加注效率以及潜在问题。系统还提供了多种数据分析工具，帮助您从海量数据中挖掘有价值的信息，为设备优化和决策提供支持。</p>
    </div>
    <p class="content-desc">
      总之，智能加注系统App是您在加注设备领域的得力助手。无论您是设备管理员还是操作员，本App都将为您带来前所未有的便捷与高效。快来下载体验吧！
    </p>
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
.content-intro {
  background-color: rgba(243,244,246,1);
  padding: 10px;
  border-radius: 4px;
  line-height: 1.6;
  text-indent: 2em;
}
.content-desc {
  padding: 10px;
  border-radius: 4px;
  line-height: 1.6;
}
.intro-img {
  width: 80%;
}
</style>
