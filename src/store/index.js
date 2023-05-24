import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions = {
    increasewait(context,value){
        setTimeout(()=>{
            context.commit('increasewait',value)
        },2000)
    }
}
const mutations = {
    increasewait(state,value){
        state.sum+=value
    },
    increase(state,value){
        state.sum+=value
    },
    decrease(state,value){
        state.sum-=value
    }
}
const state = {
    sum:1,
    personList:[
        {name:'zk',age:19,sex:'男'},
        {name:'aaa',age:1000,sex:'女'}
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})