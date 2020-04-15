import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'ant-design-vue/dist/antd.css';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import '@/icons';
import '@/permission'

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
