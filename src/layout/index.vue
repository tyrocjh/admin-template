<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <Header />
      <Navbar :cur-route="curRoute" :list="navInfo" />
    </div>
    <div :class="['main-container', needSubNav ? '' : 'no-sub-nav']">
      <div class="container-left">
        <SubNavbar :cur-route="curRoute" :info="subNavInfo" />
      </div>
      <div class="container-right">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';

export default {
  name: 'Layout',
  components: {
    Header,
    Navbar,
    SubNavbar
  },
  data() {
    return {
      curRoute: {},
      navInfo: [],
      subNavInfo: {},
      needSubNav: false
    }
  },
  created() {
    this.setNavData();
  },
  watch:{
    $route() {
      this.setNavData();
    }
  },
  methods: {
    // 更新菜单&子菜单信息
    setNavData() {
      console.info(this.$route);
      console.info(this.$router);

      // 设置当前路由信息
      this.curRoute = this.$route;

      // 设置菜单信息
      this.navInfo = this.$router.options.routes;

      // 设置子菜单信息
      let curPath = this.$route.meta.activeMenu;
      this.$router.options.routes.map(item => {
        item.path === curPath && (this.subNavInfo = item);
      });
      this.needSubNav = false;
      this.subNavInfo && this.subNavInfo.children.map(item => {
        !item.hidden && (this.needSubNav = true);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  padding-top: 100px;
  height: 100%;
  width: 100%;

  .fixed-header {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .main-container {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    .container-left {
      position: absolute;
      width: 200px;
      height: 100%;
    }
    .container-right {
      position: absolute;
      left: 200px;
      right: 0;
      height: 100%;
    }
    &.no-sub-nav {
      .container-left {
        display: none;
      }
      .container-right {
        left: 0;
      }
    }
  }
}
</style>
