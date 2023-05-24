import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About.vue'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'
import Detail from '../views/Detail'
import Detail2 from '../views/Detail2'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    children:[
      {
        path:'page1',
        name:'page1',
        component:Page1,
        children:[
          {
            path:'detail',
            name:'detail',
            component:Detail
          }
        ]
      },
      {
        path:'page2',
        name:'page2',
        component:Page2,
        children:[
          {
            path:'detail2/:name/:age',
            name:'detail2',
            component:Detail2,
            props:true
            //如果props为true的话,就会把路由组件收到的所有params参数以props参数的形式传递给detail2组件
          }
        ]
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
