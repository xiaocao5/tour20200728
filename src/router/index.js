import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home';
import Search from '../components/search/Search.vue';
import City from '../components/city/City.vue';
import Detail from '../components/detail/Detail.vue';
import SiteImgs from '../components/siteImgs/siteImgs.vue';
import SiteTicket from '../components/siteTicket/SiteTicket.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/city',
    component: City
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/siteImgs',
    component: SiteImgs
  }, {
    path: '/siteTicket',
    component: SiteTicket
  }]
})