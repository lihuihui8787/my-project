import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import home from '../components/home';
import about from '../components/about';
import list from '../components/list/'
import concact from'../components/concact'
import list1 from '../components/list/list1'
import list2 from '../components/list/list2'
import list3 from '../components/list/list3'

import home1 from '../components/home1';
import home2 from '../components/home2';
import home3 from '../components/home3';
import home4 from '../components/home4';
Vue.use(Router);

export default new Router({
  routes:[
    {path:"/",component:index,children:[
        {path:"/home",name:"home",component:home,children:[
            {path:"/home",redirect:'home1'},
            {path:"home1",name:"home1",component:home1},
            {path:"home2",component:home2},
            {path:"home3",component:home3},
            {path:"home4",component:home4},
          ]},
        {path:"/list",component:list,children:[
            {path:"",redirect:'list1'},
            {path:"list1",component:list1},
            {path:"list2",component:list2},
            {path:"list3",component:list3}
          ]},
        {path:"/about",component:about},
        {path:"/concact",component:concact},
        {path:"/",redirect:"home/home1"},
      ]},


  ]

})
