import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sidebar from '@/components/sidebar'
import card from '@/components/card'
import columnsplitting from '@/components/columnsplitting'
import simplecard from '@/components/simplecard'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/sidebar',
      name: 'sidebar',
      components:{ 
      	sidebar : sidebar 
      }
    },
       {
      path: '/card',
      name: 'card',
      components:{ 
      	card : card 
      }
    },
       {
      path: '/columnsplitting',
      name: 'columnsplitting',
      components:{ 
      	columnsplitting : columnsplitting 
      }
    },
      {
      path: '/simplecard',
      name: 'simplecard',
      components:{ 
      	simplecard : simplecard 
      }
    },
     
  ]
})
