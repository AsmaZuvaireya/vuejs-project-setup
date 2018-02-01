import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sidebar from '@/components/sidebar'
import card from '@/components/card'
import columnsplitting from '@/components/columnsplitting'
import simplecard from '@/components/simplecard'
import header from '@/components/header'
import simpleheader from '@/components/simpleheader'
import simpleform from '@/components/simpleform'
import buttonsAndTags from '@/components/buttonsAndTags'

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
     {
      path: '/header',
      name: 'header',
      components:{ 
      	header : header 
      }
    },
     {
      path: '/simpleheader',
      name: 'simpleheader',
      components:{ 
      	simpleheader : simpleheader 
      }
    },
    {
      path: '/simpleform',
      name: 'simpleform',
      components:{ 
      	simpleform : simpleform 
      }
    },
    {
      path: '/buttonsAndTags',
      name: 'buttonsAndTags',
      components:{ 
      	buttonsAndTags : buttonsAndTags 
      }
    },
     
  ]
})
