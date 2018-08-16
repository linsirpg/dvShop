import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HomePage/view/home.vue'
import ms from '@/components/HomePage/view/ms.vue'
import jjjz from '@/components/HomePage/view/jjjz.vue'
import jydq from '@/components/HomePage/view/jydq.vue'
import myyp from '@/components/HomePage/view/myyp.vue'
import mzgh from '@/components/HomePage/view/mzgh.vue'
import qcbk from '@/components/HomePage/view/qcbk.vue'
import whjy from '@/components/HomePage/view/whjy.vue'
import catetory from '@/components/Catetory/Catetory.vue'
import kind from '@/components/Kind/Kind.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'home',
        KindName: 'HOME_RECOMMEND',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/ms',
      name: 'MS',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'MS',
        KindName: 'MS_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/jjjz',
      name: 'JJJZ',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'JJJZ',
        KindName: 'JJJZ_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/jydq',
      name: 'JYDQ',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'JYDQ',
        KindName: 'JYDQ_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/myyp',
      name: 'MYYP',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'MYYP',
        KindName: 'MYYP_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/mzgh',
      name: 'MZGH',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'MZGH',
        KindName: 'MZGH_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/qcbk',
      name: 'QCBK',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'QCBK',
        KindName: 'QCBK_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/whjy',
      name: 'WHJY',
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy
      },
      meta: {
        loadname: 'WHJY',
        KindName: 'WHJY_HOTRECOMMEND_VERTICAL',
        limit: 10,
        Class: 'A'
      }
    },
    {
      path: '/Catetory/:id?',
      name: 'Catetory',
      component: catetory,
      meta: {
        Class: 'B',
        limit: 10
      }
    },
    {
      path: '/Catetory/:Id?/kind/:id?',
      name: 'kind',
      component: kind,
      meta: {
        Class: 'C',
        limit: 10
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (router.app.$store) {
    if (from.meta.Class === 'A') {
      router.app.$store.state[from.name + 'ScrollTop'] = document.documentElement.scrollTop || document.body.scrollTop
    }
    if (from.meta.Class === 'B') {
      router.app.$store.state[from.name + 'ScrollTop' + from.query.id] = document.documentElement.scrollTop || document.body.scrollTop
    }
    if (from.meta.Class === 'C') {
      router.app.$store.state[from.name + 'ScrollTop' + from.query.id] = document.documentElement.scrollTop || document.body.scrollTop
    }
  }
  next()
})
export default router
