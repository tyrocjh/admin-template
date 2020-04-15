<template>
  <div class="header">
		<div class="header-left">
			<h1 class="logo">LOGO</h1>
			<div class="hotel-select" @click="test">选择酒店</div>
		</div>
		<div class="header-right">
			<span>帮助文档</span>
			<div>
				用户名
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    test() {
      this.$router.replace({
        path: '/refresh'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 1200px;
	height: 50px;
	background-color: #fff;
	.header-left,
	.header-right {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.header-left {
		.logo {
			font-size: 30px;
			font-weight: 700;
		}
		.hotel-select {
			margin-left: 100px;
		}
	}
}
</style>
