<template>
  <div class="helper-wrap">
    <!-- <div class="app-header">
      <img src="../../assets/logo.jpg" class="app-logo"/>
      <span class="app-title">智能加注系统</span>
    </div> -->
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
import Menu from '../../components/menu.vue'
import Background from '../../components/background.vue'
import Intro from '../../components/intro.vue'
import Home from '../../components/home.vue'
import My from '../../components/my.vue'
import Monitor from '../../components/monitor.vue'
import Device from '../../components/device.vue'
import Login from '../../components/login.vue'
export default {
  name: 'HelpPage',
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
body {
  overflow-y: hidden;
}
.helper-wrap {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  box-sizing: border-box;
}
.helper-wrap::-webkit-scrollbar {
  width: 0;
}
 
/* 隐藏水平滚动条 */
.helper-wrap::-webkit-scrollbar {
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
.content-intro {
  flex: 1;
  min-width: 200px;
}
.content-intro .intro-title span {
  display: inline-block;
  padding: 10px 0px;
  border-bottom: 3px solid #1682F9;
}
.content-intro-right {
  margin-left: 60px;
}
.content-intro-left {
  padding-left: 100px;
}
.content-imgs {
  /* background-color: #1682F9; */
}
.content-imgs-preview {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.content-img {
  width: 250px;
  border-radius: 10px;
  margin-right: 10px;
}
.content-img-preview {
  width: 200px;
  border-radius: 10px;
}
.intro-desc {
  font-size: 14px;
  color: rgb(121, 127, 138);;
}
.intro-title {

}
.intro-item {
  display: flex;
  align-items: center;
}
.intro-item .number {
  font-size: 30px;
  color: #1682F9;
  font-weight: bold;
  margin-right: 10px;
}
.content-container .content-imgs-preview{
  justify-content: flex-start;
}
.content-img-preview {
  margin-right: 20px;
}
.content-intro-right {
  margin-left: 100px;
}
.content-main {
  padding-left: 100px;
  padding-right: 100px;
  /* border: unset; */
}
</style>
