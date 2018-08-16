// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
// import './lib/filter.js'

import filters from './filter/filter.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://gdtvimg.weixinmvp.com/res/gdtvimg/20180404/a8f431e43e32406aad3168bb6aaba31c.png',
  attempt: 1,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchstart', 'touchmove', 'touchend'],
  adapter: {
    loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
    },
    loading (listender, Init) {
    },
    error (listender, Init) {
    }
  },
  filter: {
    ImageFilter (listener, options) {
      listener.src = filters.AnalysisImg(listener.src)
    }
  }
})
