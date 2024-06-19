<template>
  <div class="background-container">
    <p class="content-title">背景简介</p>
    <p class="content-intro">
      在工业生产中，尤其是涉及油气开采、化工、电力、水处理等领域，设备和管道常因腐蚀而造成严重经济损失和安全隐患。缓蚀剂作为一种重要的防腐手段，其精确、适时、适量的加注对于防止金属材料腐蚀至关重要。
    </p>
    <p class="content-desc">
      传统的手工或半自动化的缓蚀剂加注方式存在诸多局限性，无法满足现代工业对高效、精准、安全及环保的要求。
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
</style>
