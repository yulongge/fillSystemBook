<template>
  <div class="background-container">
    <p class="content-title">背景简介</p>
    <p class="content-intro">
      在工业生产中，尤其是涉及油气开采、化工、电力、水处理等领域，设备和管道常因腐蚀而造成严重经济损失和安全隐患。缓蚀剂作为一种重要的防腐手段，其精确、适时、适量的加注对于防止金属材料腐蚀至关重要。
    </p>
    <p class="content-desc">
      传统的手工或半自动化的缓蚀剂加注方式存在诸多局限性，无法满足现代工业对高效、精准、安全及环保的要求。
    </p>
    <p>一、智能加注系统App的优势</p>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>1. 高效性</span>
      </p>
      <p>实时数据监测：智能加注系统App能够实时收集并展示加注设备的运行数据，如加注量、压力、温度等，无需人工现场监测。</p>
      <p>远程操控：用户可以通过App远程操控加注设备，实现设备的开关控制、加注速度调节和设定加注量等操作，大大提高了工作效率。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>2. 数据分析</span>
      </p>
      <p>精准数据分析：App具备强大的数据分析功能，通过对历史数据的收集和分析，可以提供设备运行状况、加注效率等方面的洞察，帮助用户优化设备操作和维护计划。</p>
      <p>数据可视化：通过直观的图表和报告，用户可以更轻松地理解数据，从而做出更明智的决策。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>3. 成本效益</span>
      </p>
      <p>减少人力成本：智能加注系统App能够减少人工现场监测和操控的需求，从而降低人力成本</p>
      <p>提高生产效率：通过优化设备操作和维护计划，可以减少设备故障和停机时间，提高生产效率</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>4. 标准化与一致性：</span>
      </p>
      <p>标准化服务：智能加注系统App采用标准化的服务流程，确保每次操作的一致性和准确性。</p>
      <p>减少人为错误：避免了人为操作可能带来的误差和失误，提高了操作的可靠性和安全性</p>
    </div>
    <p>二、传统人工参与的优势</p>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>1. 复杂问题解决：</span>
      </p>
      <p>人工操作在处理复杂问题、需要深度理解或个性化服务的场景中表现更佳，能够提供更为人性化的解决方案。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>2. 复杂问题解决：</span>
      </p>
      <p>人工操作能够更好地理解和响应客户的情感需求，建立情感联系，这对于提升客户满意度和忠诚度至关重要。</p>
    </div>
    <div class="content-intro-item">
      <p class="intro-title">
        <span>3. 复杂问题解决：</span>
      </p>
      <p>人工操作能够灵活应对各种突发情况和非标准问题，而智能系统在某些复杂或未知的情况下可能无法完全适应。</p>
    </div>
    <p>智能加注系统App在高效性、数据分析、成本效益和标准化服务等方面具有显著优势，能够大大提高加注设备的管理效率和可靠性。然而，在处理复杂问题、情感交流和灵活性方面，传统人工参与仍然具有不可替代的优势。因此，在实际应用中，可以根据具体需求和场景选择合适的管理方式。</p>
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
.background-container {

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
