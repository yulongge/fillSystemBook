<template>
  <div id="app">
    <div class="app-header">
      <img src="./assets/logo.jpg" class="app-logo" @click="toHome"/>
      <span class="app-title" @click="toHome">智能加注系统</span>
      <div class="header-menu">
        <router-link to="/help">产品文档</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
body {
  overflow-y: hidden;
}
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  box-sizing: border-box;
}
#app::-webkit-scrollbar {
  width: 0;
}
 
/* 隐藏水平滚动条 */
#app::-webkit-scrollbar {
  height: 0;
}
.app-header {
  height: 60px;
  border-bottom: 1px solid #efefef;
  border-color: rgba(229,231,235,1);
  display: flex;
  align-items: center;
  padding: 0px 100px;;
  flex-shrink: 0;
  box-sizing: border-box;
  .header-menu {
    flex: 1;
    text-align: right;
  }
}
.app-logo {
  width: 32px;
  height: 32px;
}
.app-title {
  color: rgba(107,114,128,1);
  margin-left: 20px;
  font-size: 20px;
}
.app-container {
  flex: 1;
  display: flex;
  padding: 0px 60px;
  box-sizing: border-box;
}
.app-menu {
  width: 200px;
  border-right: 1px solid #efefef;
  border-color: rgba(229,231,235,1);
}
.app-content {
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
  height: 90vh;
}

.content-main {
  margin-top: 20px;
  border: 1px solid #efefef;
  min-height: 200px;
  display: flex;
  padding: 10px;
  border-radius: 5px;
}
</style>
