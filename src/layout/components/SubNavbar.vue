<template>
  <div class="sub-navbar">
    <ul v-if="info" class="sub-nav">
      <li v-for="(item, idx) in info.children" :key="idx"
          :class="curRoute.path === (info.path + '/' + item.path) ? 'active' : ''">
        <router-link :to="info.path + '/' + item.path">{{item.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubNavbar',
  props: {
    curRoute: {
      // 当前路由
      type: Object,
      default: () => {}
    },
    info: {
      // 菜单对象
      type: Object,
      default: () => {}
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.sub-navbar {
  ul.sub-nav {
    li {
      &.active {
        color: blue;
      }
    }
  }
}
</style>
