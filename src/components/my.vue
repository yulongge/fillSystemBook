<template>
  <div class="content-container">
    <p class="content-title">功能介绍</p>
    <p class="content-title">我的页面包含一下功能</p>
    <div class="content-main content-main-imglist">
      <div class="content-imgs-preview">
        <img src="../assets/my/index.png" class="content-img-preview"/>
        <img src="../assets/my/userInfo.png" class="content-img-preview"/>
        <img src="../assets/my/userlist.png" class="content-img-preview"/>
        <img src="../assets/my/dept.png" class="content-img-preview"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-intro">
        <p class="intro-title">
          <span>我的</span>
        </p>
        <p class="intro-item">
          <span class="number">01</span>
          个人信息入口
        </p>
        <p class="intro-item intro-desc">查看个人信息，并可以进行修改和完善</p>
        <p class="intro-item">
          <span class="number">02</span>
          用户管理入口
        </p>
        <p class="intro-item intro-desc">管理员权限，可以对部门人员进行管理</p>
        <p class="intro-item">
          <span class="number">03</span>
          部门管理
        </p>
        <p class="intro-item intro-desc">管理员权限，对公司部门组织进行管理</p>
        <p class="intro-item">
          <span class="number">04</span>
          退出登录
        </p>
        <p class="intro-item intro-desc">退出登录后，只能访问首页相关信息，其他模块不可访问</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/my/index.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main">
      <div class="content-imgs">
        <img src="../assets/my/userInfo.png" class="content-img"/>
        <img src="../assets/my/userInfo_edit.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>个人信息</span>
        </p>
        <p class="intro-item intro-desc">显示个人信息，可以进行修改</p>
      </div>
    </div>
    <div class="content-main content-main-imglist">
      <div class="content-intro">
        <p class="intro-title">
          <span>用户管理</span>
        </p>
        <p class="intro-item intro-desc">管理人员进行用户管理</p>
        <p class="intro-item">
          <span class="number">01</span>
          用户列表
        </p>
        <p class="intro-item intro-desc">展示公司用户，并进行编辑和删除操作</p>
        <p class="intro-item">
          <span class="number">02</span>
          搜索用户
        </p>
        <p class="intro-item intro-desc">根据输入关键字进行用户搜索，并进行编辑和删除操作</p>
        <p class="intro-item">
          <span class="number">03</span>
          添加用户
        </p>
        <p class="intro-item intro-desc">管理人员，可以添加公司人员</p>
      </div>
      <div class="content-imgs">
        <img src="../assets/my/userlist.png" class="content-img"/>
        <img src="../assets/my/searchUser.png" class="content-img"/>
        <img src="../assets/my/addUser.png" class="content-img"/>
      </div>
    </div>
    <div class="content-main content-main-imglist">
      <div class="content-imgs">
        <img src="../assets/my/deptUsers.png" class="content-img"/>
        <img src="../assets/my/searchDept.png" class="content-img"/>
        <img src="../assets/my/addDept.png" class="content-img"/>
      </div>
      <div class="content-intro content-intro-right">
        <p class="intro-title">
          <span>部门管理</span>
        </p>
        <p class="intro-item intro-desc">管理人员进行部门管理</p>
        <p class="intro-item">
          <span class="number">01</span>
          部门列表
        </p>
        <p class="intro-item intro-desc">展示公司部门，并进行添加，编辑和删除操作</p>
        <p class="intro-item">
          <span class="number">02</span>
          搜索部门
        </p>
        <p class="intro-item intro-desc">根据输入关键字进行部门搜索，并进行编辑和删除操作</p>
        <p class="intro-item">
          <span class="number">03</span>
          添加部门
        </p>
        <p class="intro-item intro-desc">管理人员，可以对公司部门组织进行管理</p>
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
.content-main-imglist {
  padding: 10px;
  /* justify-content: space-between; */
}
.content-container .content-imgs-preview {
  justify-content: space-between;
}
</style>
