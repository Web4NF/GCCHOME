<template>
  <div class="footer">
    <!-- 底部邮箱 -->
    <div class="email">
      <div class="demo-input-suffix">
        <span style="font-size:17px;font-weight:600;">邮件订阅</span>
        <el-input placeholder="请输入您的邮件地址" suffix-icon="el-icon-s-promotion"></el-input>
        <span style="font-size:15px;color:#ddd;">收到邮件后,我们会在24小时内与您联系</span>
      </div>
    </div>
    <!-- 底部导航 -->
    <div class="footernav">
      <div class="fnav-left">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">公司介绍</el-menu-item>
          <el-menu-item index="3">主要业务</el-menu-item>
          <el-menu-item index="4">成功案例</el-menu-item>
          <el-menu-item index="5">联系我们</el-menu-item>
        </el-menu>
      </div>
      <div class="fnav-right">
        <div class="shareicon">
          <a style="margin:0 5px 0 5px;" v-for="item in 4" :key="item">
            <img src="../../public/img/facebook.png" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- 版权所属 -->
    <div class="rights">
      <div class="rightscont">
        <pre>©2017 Global Consulting Center Inc. All Rights Reserved.</pre>
      </div>
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
<style lang="css" scoped>
.footer {
  width: 100%;
}

/* 底部邮箱样式 */
.footer > .email {
  margin: 0 auto;
  width: 1200px;
  height: 80px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer > .email > .demo-input-suffix > .el-input {
  width: 400px;
}

/* scoped样式穿透  vueloader写法/deep/也可以 */
.footer >>> .email > .demo-input-suffix {
  width: 770px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* scoped样式穿透  vueloader写法/deep/也可以 */
.footer >>> .email > .demo-input-suffix > .el-input.el-input--suffix > input {
  border-radius: 50px;
}

.footer >>> .email > .demo-input-suffix > .el-input.el-input--suffix > span {
  font-size: 25px;
  width: 45px;
  color: #7bb9f2;
}

/* 底部导航样式 */

.footernav {
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer
  >>> .footernav
  > .fnav-left
  > .el-menu-demo.el-menu--horizontal.el-menu
  > .el-menu-item.is-active {
  border-bottom: none;
}

/* 版权所属样式 */
.footer > .rights {
  background: #333333;
}

.footer > .rights > .rightscont {
  width: 1200px;
  height: 50px;
  font-weight: 600;
  line-height: 50px;
  margin: 0 auto;
  color: #747474;
}
</style>