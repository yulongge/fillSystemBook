<template>
  <div class="app-menu-container">
    <div class="app-menu-item">
      <span class="menu-item-title" :class="{'active': currentIndex == 0 }" @click="switchMenu(0)">产品使用说明</span>
      <div class="app-submenus">
        <span class="app-submenu-item" :class="{'active': currentIndex == 0 }" @click="switchMenu(0)">背景简介</span>
        <span class="app-submenu-item" :class="{'active': currentIndex == 1 }" @click="switchMenu(1)">产品介绍</span>
      </div>
    </div>
    <div class="app-menu-item">
      <span class="menu-item-title" :class="{'active': currentIndex == 6 }" @click="switchMenu(6)">功能模块</span>
      <div class="app-submenus">
        <span class="app-submenu-item" :class="{'active': currentIndex == 6 }" @click="switchMenu(6)">登录/注册</span>
        <span class="app-submenu-item" :class="{'active': currentIndex == 2 }" @click="switchMenu(2)">首页</span>
        <span class="app-submenu-item" :class="{'active': currentIndex == 3 }" @click="switchMenu(3)">我的</span>
        <span class="app-submenu-item" :class="{'active': currentIndex == 4 }" @click="switchMenu(4)">监听设备</span>
        <span class="app-submenu-item" :class="{'active': currentIndex == 5 }" @click="switchMenu(5)">加注设备</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuComp',
  props: {
    msg: String
  },
  data() {
   return {
    currentIndex: 0
   }
  },
  methods: {
    switchMenu(index) {
      this.currentIndex = index
      this.$emit('switchMenu', index)
    }
  }
}
</script>

<style scoped>
.app-menu-container {
  padding: 20px;
  font-size: 14px;
}
.app-menu-item {
  margin-bottom: 10px;
}
.menu-item-title {
  font-weight: 500;
}
.app-submenus {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 20px;
}
.app-submenu-item {
  padding: 10px;
  cursor: pointer;
}
.active {
  color: #03c9a9;
}
</style>
