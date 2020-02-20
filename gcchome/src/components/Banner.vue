<template>
  <div class="banner">
    <!-- 轮播顶层文字 -->
    <div class="bannerfont">
      <p>用未来思考今天</p>
      <p>PONDERING TODAY BY FUTURE</p>
      <p>Leading the Development of Industry</p>
    </div>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel trigger="click" height="760px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播下方公司信息 -->
    <div class="bannerbottom">
      <div class="bannerbottomnavcontainer">
        <div class="bannerbottomnav" v-for="item in 5" :key="item">
          <div>
            <img src="../../public/img/bannerbottomnav1_03.jpg" alt />
          </div>
          <div style="text-align:left;margin-left:10px;">
            <p style="font-size:20px;color:#08a5dc;">20+</p>
            <p style="font-size:15px;font-weight:600;">年对日的合作经验</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 860px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.banner {
  position: relative;
}

/* 轮播顶层文字样式 */
.bannerfont {
  position: absolute;
  z-index: 1020;
  color: #ffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bannerfont > p:nth-child(1) {
  margin-bottom: 40px;
  font-size: 65px;
}
.bannerfont > p:nth-child(2) {
  margin-bottom: 40px;
  font-size: 20px;
}
.bannerfont > p:nth-child(3) {
  font-size: 15px;
}

/* 轮播下导航样式 */
.bannerbottom {
  width: 100%;
  height: 130px;
  background-color: #f3f3f3;
}

.bannerbottom > .bannerbottomnavcontainer {
  /* width: 100%;
  margin: 0 auto; 水平居中 */
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%); /*垂直居中*/
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bannerbottom > .bannerbottomnavcontainer > .bannerbottomnav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 80px;
  background-color: #ffffff;
}
</style>