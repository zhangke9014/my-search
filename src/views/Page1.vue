<template>
  <div>
    <h6>Page1</h6>
    <ol>
      <li v-for="item in list">
        <!--路由携带query参数，用this.$route.query读取 -->
        <!-- <router-link :to="`/about/page1/detail?id=${item.id}&msg=${item.msg}`">{{ item.id }}</router-link> -->
        <router-link :to="{
            //path:'/about/page1/detail',
            name:'detail',
            query:{
              id: item.id,
              msg: item.msg,
            },
          }"
        >{{ item.id }}
    </router-link>
      </li>
    </ol>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "Page1",
  data() {
    return {
      list: [
        { id: "001", msg: "hello" },
        { id: "002", msg: "world" },
        { id: "003", msg: "apple" },
      ],
    };
  },
};
</script>

<style>
</style>