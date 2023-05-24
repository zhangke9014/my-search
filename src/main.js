import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.config.productionTip = false;

const vm = new Vue({
    render:h=>h(App),
    store,
    router,
    beforeCreate(){
        Vue.prototype.$bus = this;
    }
    //绑定全局事件总线，用于item（孙组件）和app（爷爷组件）之间传值;谁传谁触发，谁收谁绑定;
}).$mount('#app');
