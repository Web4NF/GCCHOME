import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompanyProfile from "../views/CompanyProfile.vue"
import SuccessfulCase from "../views/SuccessfulCase.vue"
import MCompanyProfile from "../views/MCompanyProfile.vue"
import NanJingProfile from "../views/NanJingProfile.vue"
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/Home'
}, {
  path: '/Home',
  name: 'Home',
  component: Home
}, {
  path: '/CompanyProfile',
  name: CompanyProfile,
  component: CompanyProfile
}, {
  path: '/SuccessfulCase',
  name: SuccessfulCase,
  component: SuccessfulCase
}, {
  path: '/MCompanyProfile',
  name: MCompanyProfile,
  component: MCompanyProfile
}, {
  path: '/NanJingProfile',
  name: NanJingProfile,
  component: NanJingProfile
}, {
  path: '/News',
  name: News,
  component: News
}, {
  path: '/Contact',
  name: Contact,
  component: Contact
}]

const router = new VueRouter({
  routes
})

export default router