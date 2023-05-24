<template>
  <div>
    <ul>
      <li>消息编号:{{ this.$route.query.id }}</li>
      <li>消息信息:{{ $route.query.msg }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
  console.log(this.$route);
  },
};
</script>

<style>
</style>