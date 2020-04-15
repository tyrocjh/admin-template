<template>
  <div class="navbar">
		<div class="container">
			<ul class="nav">
        <template v-for="(item, idx) in list">
          <li v-if="!item.hidden" :key="idx" 
              :class="curRoute.meta.activeMenu === item.path ? 'active' : ''">
            <router-link :to="item.path">{{item.meta && item.meta.title}}</router-link>
          </li>
        </template>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    curRoute: {
      // 当前路由
      type: Object,
      default: () => {}
    },
    list: {
      // 子菜单列表
      type: Array,
      default: () => []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.navbar {
	width: 100%;
	height: 50px;
	display: flex;
	background-color: #ececec;
	.container {
		margin: 0 auto;
		width: 1200px;
		ul.nav {
			display: flex;
			align-items: center;
			height: 100%;
			li {
        margin-right: 20px;
        &.active {
          color: blue;
        }
			}
		}
	}
}
</style>
