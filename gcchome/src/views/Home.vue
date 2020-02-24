<template>
  <el-container>
    <el-header height="115px">
      <gheader></gheader>
    </el-header>
    <el-main>
      <!-- 轮播图 -->
      <Banner></Banner>
      <!-- 网页内容部分 -->
      <div class="content-wrap">
        <!-- 主要业务 -->
        <div class="mainbus">
          <div class="mbcontainer">
            <div class="comtit">主要业务</div>
            <div class="comtitcont">利用信息技术和人才的能力,为客户提供高效率高质量的产品和服务</div>
            <div class="cardcontainer">
              <div class="buscard" v-for="item in 3" :key="item"></div>
            </div>
            <!-- 分割线 -->
            <div class="line">查看更多</div>
          </div>
        </div>
        <!-- 公司简介 -->
        <div class="compinfo">
          <div class="cicontainer">
            <div class="comtit">公司简介</div>
            <div class="comtitcont">稳步建立与客户的信赖关系,针对客户的多样性要求,提供更加高品质的服务,做到"双赢"</div>
            <div class="compinfo-item">
              <div class="ciitem-left">
                <h3 style="margin-bottom:30px;">更专业的IT定制发方案,最完善的服务体系</h3>
                <p>认证专业实力</p>
                <p>专属顾问全程一对一服务</p>
                <p>售后服务完善,即时性回复,无需等待</p>
                <p>秉承"人才,效率,创造,服务"的经营理念</p>
                <div style="margin-bottom:10px;">
                  <el-input placeholder="输入您的疑问..."></el-input>
                </div>
                <el-input placeholder="填写您的手机号码">
                  <el-button slot="append" type="success">立即提交</el-button>
                </el-input>
              </div>
              <div class="ciitem-right">
                <div class="cir-item" v-for="item in 3" :key="item">
                  <div class="cir"></div>
                  <div class="arrow"></div>
                  <div class="cir"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 成功案例 -->
        <div class="sucase">
          <div class="sccontainer">
            <div class="comtit">成功案例</div>
            <div class="comtitcont">随着新技术和服务的层出不穷,人类正在逐渐进入一个智能时代</div>
            <div class="suase-item">
              <div class="scitem-left">
                <div class="line">养老云IOT系统</div>
                <p
                  class="sccont"
                >南京迈特望是国家高新技术企业、双软企业,拥有软件著作权24项,高新技术产品1项,获得了ISO9001质量管理体系认证、ISO27001信息安全管理体系认证、CMMI3软件能力成熟度模型集成三级。</p>
                <div class="commore">查看更多</div>
              </div>
              <div class="scitem-right"></div>
              <div class="mnibannerwarp">轮播</div>
            </div>
          </div>
        </div>
        <!-- 新闻资讯 -->
        <div class="newsmsg clearfix">
          <div class="nscontainer">
            <div class="newstit">新闻资讯</div>
            <div class="newstitcont">最新的新闻资讯 实时更新 时时关注 于您共享</div>
            <div class="newscont">
              <div class="newscard" v-for="item in 3" :key="item">
                <p style="margin-bottom:10px;font-size:12px;color:#9e9e9e;">2020-02-20</p>
                <p style="margin-bottom:20px;font-size:16px;color:#000000;">GCC秉承"人才,效率,创造,服务"的经营理念</p>
                <p
                  style="margin-bottom:30px;font-size:15px; color:#696969;"
                >稳步建立与客户的信赖关系,针对客户的多样性要求,提供更加高品质的服务,做到"双赢"</p>
                <div class="commore">查看更多</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商业合作 -->
        <div class="buscoop">
          <div class="bscontainer">
            <div class="bctit">商业合作</div>
            <div class="bscompcontainer">
              <div class="bscard" v-for="item in 10" :key="item">
                <img src="../../public/img/alipay.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <gfooter></gfooter>
    </el-footer>
  </el-container>
</template>

<script>
import Banner from "@/components/Banner.vue";
import "@/assets/css/base.css";

export default {
  name: "Home",
  components: {
    Banner
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-main {
  padding: 0;
}

.el-header {
  position: absolute;
  /* left: 50%;
  transform: translateX(-50%); */
  z-index: 1030;
}
/* 公共标题样式 */
.comtit {
  text-align: center;
  font-size: 40px;
  position: relative;
  margin-top: 50px;
}
.comtit::after {
  content: "";
  position: absolute;
  left: 54%;
  bottom: 0;
  margin-left: -70px;
  margin-bottom: -25px;
  width: 25px;
  height: 3px;
  background: #01a7db;
}

/* 公共标题信息样式 */
.comtitcont {
  margin-top: 50px;
}

/* 查看更多 */
.commore {
  font-size: 17px;
  font-weight: 600;
  color: #01a7db;
}

/* 主要业务样式 */
.mainbus {
  width: 100%;
}

.mainbus > .mbcontainer {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.mainbus > .mbcontainer > .cardcontainer {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
}

.mainbus > .mbcontainer > .cardcontainer > .buscard {
  width: 395px;
  height: 460px;
  border: 1px solid red;
}

/* 分割线样式 */
.mainbus > .mbcontainer > .line {
  padding: 0 20px 0;
  margin: 60px 0;
  line-height: 1px;
  border-left: 520px solid #ddd;
  border-right: 520px solid #ddd;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #01a7db;
}

/* 公司简介 */
.compinfo {
  background-color: #f2f2f2;
}

.compinfo > .cicontainer {
  width: 1200px;
  margin: 0 auto;
  /* border: 1px solid red; */
  overflow: hidden;
  /* background-size: 100% 100%;
  background: url("../../public/img/image.png") no-repeat 0px 45px; */
}

.compinfo > .cicontainer > .compinfo-item {
  /* margin-top: 40px; */
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-left {
  width: 400px;
  height: 350px;
  text-align: left;
  padding: 30px 0;
  /* border: 1px solid black; */
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-left > p:not(:last-child) {
  margin-bottom: 15px;
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-left > p:nth-child(5) {
  margin-bottom: 30px;
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-right {
  width: 680px;
  height: 460px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid black; */
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-right > .cir-item {
  width: 150px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
}

.compinfo > .cicontainer > .compinfo-item > .ciitem-right > .cir-item > .arrow {
  width: 50px;
  height: 50px;
  border: 1px solid purple;
}
.compinfo > .cicontainer > .compinfo-item > .ciitem-right > .cir-item > .cir {
  width: 150px;
  height: 150px;
  border: 1px solid blue;
  border-radius: 50% 50%;
}

/* 成功案例 */
.sucase {
  width: 100%;
}

.sucase > .sccontainer {
  width: 1200px;
  margin: 0 auto;
  /* border: 1px solid red; */
}

.sucase > .sccontainer > .suase-item {
  height: 500px;
  margin: 40px 0 40px 0;
  /* border: 1px solid red; */
  position: relative;
}

.sucase > .sccontainer > .suase-item > .mnibannerwarp {
  width: 580px;
  height: 150px;
  border: 1px solid red;
  position: absolute;
  top: 300px;
}
.sucase > .sccontainer > .suase-item > .scitem-left {
  /* float: left; */
  position: absolute;
  text-align: left;
  padding: 85px 30px;
  width: 520px;
  height: 350px;
  /* border: 1px solid red; */
}

.sucase > .sccontainer > .suase-item > .scitem-left > .line {
  width: 200px;
  line-height: 2px;
  border-left: 45px solid #01a7db;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.sucase > .sccontainer > .suase-item > .scitem-left > .sccont {
  line-height: 30px;
  margin: 30px 0 30px;
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
}

.sucase > .sccontainer > .suase-item > .scitem-right {
  /* float: left; */
  position: absolute;
  left: 520px;
  width: 676px;
  height: 500px;
  border: 1px solid red;
}

/* 新闻资讯 */
.newsmsg {
  margin: 0 auto;
  overflow: hidden;
  background-color: #ddd;
}

.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.newsmsg > .nscontainer {
  width: 80%;
  text-align: left;
  height: 400px;
  float: right;
  color: #ffffff;
}

.newsmsg > .nscontainer > .newstit {
  font-size: 40px;
  margin-top: 55px;
  margin-bottom: 25px;
}
.newsmsg > .nscontainer > .newstitcont {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 30px;
}

.newsmsg > .nscontainer > .newscont {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
}
.newsmsg > .nscontainer > .newscont > .newscard {
  padding: 20px;
  margin: 0 10px 0 10px;
  width: 350px;
  height: 200px;
  /* border: 1px solid red; */
}

/* 商业合作 */
.buscoop {
  width: 100%;
}

.buscoop > .bscontainer {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.buscoop > .bscontainer > .bctit {
  font-size: 40px;
  margin: 50px 0 50px 0;
}

.buscoop > .bscontainer > .bscompcontainer {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.buscoop > .bscontainer > .bscompcontainer > .bscard {
  width: 235px;
  height: 75px;
  margin-bottom: 50px;
}
</style>