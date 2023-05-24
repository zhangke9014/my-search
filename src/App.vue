<template>
  <div id="app">
    <MySearch />
    <Son>
      <template v-slot:img>
        <h3>hahaha</h3>
      </template>
      <h2>I love you</h2>
      <template #games="games">
        <h2>{{ games }}</h2>
        <h2>{{ games['games'] }}</h2>
        <ul>
          <li v-for="game in games.games">{{ game }}</li>
        </ul>
      </template>
    </Son> 
    <MyList />
    <VuexTest></VuexTest>
    <nav>
      <router-link to="/home" active-class="active">Home</router-link> |
      <router-link to="/about" active-class="active">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MySearch from "./components/my-search.vue";
import MyList from "./components/my-list.vue";
import Son from "./components/Son.vue";
import VuexTest from "./components/vue_x-test.vue";
export default {
  name: "App",
  data() {
    return {
      films: ["教父", "让子弹飞", "海底总动员"],
    };
  },
  components: { MySearch, MyList, Son, VuexTest },
  methods: {},
};
</script>

<style>
nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>