<template>
  <div>
    <h2>当前求和为{{sum}}</h2>
    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increase(n)">点我增加</button>
    <button @click="decrease(n)">点我减少</button>
    <button @click="increasewait(n)">点我等一下再加</button>
    <ul>
        <li v-for="item in personList">姓名:{{ item.name }} 年龄:{{ item.age }} 性别:{{item.sex}}</li>
    </ul> 
  </div>
</template>

<script>
import{ mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
    name:'vuex-wait',
    data(){
        return {
            n:1,
        }
    },
    methods:{
        // increase(value){
        //     this.$store.commit('increas',value)
        // },
        // decrease(value){
        //     this.$store.commit('decrea',value)
        // },
        // increasewait(value){
        //     this.$store.dispatch('increasewait',value)
        // }
        ...mapActions(['increasewait']),
        ...mapMutations(['decrease','increase'])
    },
    computed:{
        // sum(){
        //     return this.$store.state.sum
        // },
        ...mapState({sum:'sum',personList:'personList'})
    }
}
</script>

<style>

</style>