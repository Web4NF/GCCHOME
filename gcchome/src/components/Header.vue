<template>
  <div class="header-top">
    <!-- 顶部logo -->
    <div>
      <img src="../../public/img/GCCLOGO.jpg" />
    </div>
    <!-- 顶部导航 -->
    <div class="navbar">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">公司介绍</template>
          <el-menu-item index="/CompanyProfile">公司简介</el-menu-item>
          <el-menu-item index="/MCompanyProfile">母公司简介</el-menu-item>
          <el-menu-item index="/NanJingProfile">南京市简介</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">主要业务</template>
          <el-menu-item index="3-1">公司简介</el-menu-item>
          <el-menu-item index="3-2">母公司简介</el-menu-item>
          <el-menu-item index="3-3">南京市简介</el-menu-item>
        </el-submenu>
        <el-menu-item index="/SuccessfulCase">成功案例</el-menu-item>
        <el-menu-item index="/News">新闻资讯</el-menu-item>
        <el-menu-item index="/Contact">联系我们</el-menu-item>
      </el-menu>
    </div>
    <!-- 顶部搜索/语言 -->
    <div class="search">
      <i class="el-icon-search"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
/* .box_header { */
/* max-width: 1200px;
  height: 90px;
  position: fixed;
  z-index: 1030;
  margin: 0 auto;
  background-color: #ffffff; */
/* } */

.header-top {
  width: 1200px;
  margin: 0 auto;
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-size: 14px;
  z-index: 1; */
  /* padding-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center; */
}

.el-menu {
  color: #ffffff;
}
.el-menu-demo {
  height: 40px;
  /* border-bottom-color:none!important; */
  background-color: rgba(0, 0, 0, 0);
  /* float: right; */
  /* margin-right: 8.54%; */
}
/* 点击出来的下划线进行隐藏 */
/* .el-menu-item.is-active {
  border-bottom: none !important;
  color: rgba(0, 0, 0, 0);
} */
/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/* 导航栏的间距等样式 */
/* .el-menu-item {
  padding: 0 62px;
  font-size: 16px;
} */

/* 点击出来的下划线动效残留进行隐藏 */
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
/* 点击以后的背景色进行隐藏 */
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
}
</style>