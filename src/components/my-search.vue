<template>
    <div class="head">
        <h3>Search Part</h3>
        <input type="text" placeholder="请输入搜索值" v-model="name">
        <button @click="getName">搜索</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'my-search',
    data(){
        return {
            name:'',

        }
    },
    methods:{
        getName(){
            axios.get(`https://api.github.com/search/users?q=${this.name}`).then(
                response=>{
                    console.log('请求成功了');
                    //谁用数据谁进行绑定,谁接收数据谁触发事件;
                    this.$bus.$emit('getUsersInfo',response.data.items);
                },
            )
            .catch(error=>{
                    console.log(error.message);
                })
        }
    },
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .head {
        background-color: skyblue;
        width: 500px;
        height: 150px;
        margin: 20px;
    }
    h3 {
        text-align: center;
        margin: 30px;
    }
    .head input {
        font-size: 10px;
        text-align: center;
        height: 20px;
        line-height: 20px;
        margin:0 10px;
    }
    
</style>