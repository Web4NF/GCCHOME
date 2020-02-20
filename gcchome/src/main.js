import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

Vue.use(ElementUI);
Vue.component("gheader", Header); //注册全局头部组件
Vue.component("gfooter", Footer); //注册全局头部组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')