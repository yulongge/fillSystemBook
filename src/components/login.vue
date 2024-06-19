<template>
  <div class="content-container">
    <p class="content-title">登录</p>
    <!-- <p class="content-title">登录页面包含一下功能</p> -->
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/login/index.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>登录</span>
        </p>
        <p class="intro-item">
          功能说明：
        </p>
        <p class="intro-item">
          输入对应的用户名和密码，进行登录
        </p>
        <p class="intro-item intro-desc">
          如果您还没有账户，可以自行注册!
        </p>
        <p class="intro-item intro-desc">
          如果您忘记密码，可以进行修改密码!
        </p>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro content-intro-left">
        <p class="intro-title">
          <span>注册</span>
        </p>
        <p class="intro-item">
          功能说明：
        </p>
        <p class="intro-item">
          根据页面提示，进行注册
        </p>
        <p class="intro-item intro-desc">
          注册后，会自动登录~
        </p>
      </div>
      <div class="content-imgs">
        <img src="../assets/login/regist.png" class="content-img"/>
      </div>
    </div>
    <!-- <div class="content-main">
      <div class="content-imgs-preview">
        <img src="../assets/login/index.png" class="content-img-preview"/>
        <img src="../assets/login/regist.png" class="content-img-preview"/>
      </div>
    </div> -->
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
/* .content-container .content-imgs-preview{
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
} */
</style>
