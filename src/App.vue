<template>
  <div id="app">
    <div class="app-header">
      <img src="./assets/logo.jpg" class="app-logo"/>
      <span class="app-title">智能加注系统</span>
    </div>
    <div class="app-container">
      <div class="app-menu">
        <Menu @switchMenu="switchMenu"/>
      </div>
      <div class="app-content">
        <Background v-if="currentIndex == 0"/>
        <Intro v-if="currentIndex == 1"/>
        <Home v-if="currentIndex == 2"/>
        <My v-if="currentIndex == 3"/>
        <Monitor v-if="currentIndex == 4"/>
        <Device v-if="currentIndex == 5"/>
        <Login v-if="currentIndex == 6"/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
import Background from './components/background.vue'
import Intro from './components/intro.vue'
import Home from './components/home.vue'
import My from './components/my.vue'
import Monitor from './components/monitor.vue'
import Device from './components/device.vue'
import Login from './components/login.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Background,
    Intro,
    Home,
    My,
    Monitor,
    Device,
    Login,
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    switchMenu(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.app-header {
  height: 60px;
  border-bottom: 1px solid #efefef;
  border-color: rgba(229,231,235,1);
  display: flex;
  align-items: center;
  padding: 0px 200px;;
  flex-shrink: 0;
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
  padding: 0px 100px;
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
</style>
