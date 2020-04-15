import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home/calendar',
    hidden: true
  },

  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: '/home/calendar',
    meta: { title: '首页' },
    children: [{
      path: 'calendar',
      name: 'Calendar',
      component: () => import('@/views/home/calendar'),
      meta: { title: '收益日历', activeMenu: '/home' }
    }, {
      path: 'target',
      name: 'Target',
      component: () => import('@/views/home/target'),
      meta: { title: '预算目标', activeMenu: '/home' }
    }, {
      path: 'tendency',
      name: 'Tendency',
      component: () => import('@/views/home/tendency'),
      meta: { title: '经营走势', activeMenu: '/home' }
    }]
  },

  {
    path: '/warning',
    name: 'Warning',
    component: Layout,
    redirect: '/warning/rule',
    meta: { title: '预警管理' },
    children: [{
      path: 'rule',
      name: 'Rule',
      component: () => import('@/views/warning/rule'),
      meta: { title: '规则管理', activeMenu: '/warning' },
      hidden: true
    }, {
      path: 'record',
      name: 'Record',
      component: () => import('@/views/warning/record'),
      meta: { title: '记录查询', activeMenu: '/warning' },
      hidden: true
    }]
  },

  {
    path: '/node',
    name: 'Node',
    component: Layout,
    redirect: '/node/income',
    meta: { title: '收益节点' },
    children: [{
      path: 'income',
      name: 'NodeIncome',
      component: () => import('@/views/node/income'),
      meta: { title: '收益节点', activeMenu: '/node' },
      hidden: true
    }]
  },

  {
    path: '/report',
    name: 'Report',
    component: Layout,
    redirect: '/report/income',
    meta: { title: '收益报表', activeMenu: '/report' },
    children: [{
      path: 'income',
      name: 'ReportIncome',
      component: () => import('@/views/report/income'),
      meta: { title: '收益报表', activeMenu: '/report' },
      hidden: true
    }]
  },

  {
    path: '/setting',
    name: 'Setting',
    component: Layout,
    redirect: '/setting/event',
    meta: { title: '设置中心' },
    children: [{
      path: 'event',
      name: 'Event',
      component: () => import('@/views/setting/event'),
      meta: { title: '事件类型设置', activeMenu: '/setting' }
    }, {
      path: 'warning',
      name: 'SettingWarning',
      component: () => import('@/views/setting/warning'),
      meta: { title: '预警提醒设置', activeMenu: '/setting' }
    }, {
      path: 'node',
      name: 'SettingNode',
      component: () => import('@/views/setting/node'),
      meta: { title: '全国性收益节点设置', activeMenu: '/setting' }
    }]
  },

  {
    path: '/refresh',
    name: 'Refresh',
    component: () => import('@/views/refresh/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
