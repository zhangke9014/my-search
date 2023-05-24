<template>
  <div class="demo">
    <ul>
        <li v-for="user in users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" alt="">
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'my-list',
    data(){
        return {
            users:[],
        }
    },
    mounted(){
       
        this.$bus.$on('getUsersInfo',(users)=>{
            console.log('List组件收到了信息');
            this.users = users;
        });
    },
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .demo ul li {
        width: 300px;
        height: 300px;
        line-height: 300px;
        float: left;
        margin: 20px;
        list-style: none;
        text-align: center;
        background-color: rgba(128, 128, 128, 0.377);
    }
    .demo ul li img {
        display: inline-block;
        vertical-align: middle;
        width: 60%;
        height: 60%;

    }
</style>