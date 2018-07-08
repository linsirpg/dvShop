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
Vue.use(Router)

export default new Router({
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
        loadname: 'home'
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
        loadname: 'MS'
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
        loadname: 'JJJZ'
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
        loadname: 'JYDQ'
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
        loadname: 'MYYP'
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
        loadname: 'MZGH'
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
        loadname: 'QCBK'
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
        loadname: 'WHJY'
      }
    }
  ]
})
