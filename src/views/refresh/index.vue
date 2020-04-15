<template>
  <div></div>
</template>

<script>
export default {
  name: 'Refresh',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace(from.path);
    });
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
