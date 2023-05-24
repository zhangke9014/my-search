<template>
  <div>
    <h6>Page2</h6>
    <ul>
      <li v-for="item in list" :key="item.age">
        <!-- <router-link :to="`/about/page2/detail2/${item.name}/${item.age}`">{{
          item.name
        }}</router-link> -->
        <router-link
          :to="{
            name: 'detail2',
            //path:'/about/page2/detai2',
            //不能用path写法，否则页面不能刷新出来
            params: {
              name: item.name,
              age: item.age,
            },
          }"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      list: [
        { name: "Tom", age: 11 },
        { name: "Matriin", age: 30 },
        { name: "Kill", age: 20 },
      ],
    };
  },
};
</script>

<style>
</style>