<template>
  <div>
    <ul>
      <li>name:{{$route.params.name }}</li>
      <li>age:{{$route.params.age }}</li>
      <li>{{ age }}</li>
      <li>{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail2",
  props:['name','age'],
  //在路由组件中写个props：true,在此处接收后可以直接使用;
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
    
  },
};
</script>

<style>
</style>