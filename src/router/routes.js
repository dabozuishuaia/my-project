const box = () => import('@/page/content/box.vue')
const herolist = () => import('@/page/content/herolist.vue')
const box1 = () => import('@/components/box1.vue')
const box11 = () => import('@/components/box11.vue')
const box22 = () => import('@/components/box22.vue')
const boxTwo = () => import('@/page/boxTwo/boxTwo.vue')
const boxThree = () => import('@/page/boxThree/boxThree.vue')
const boxFoure = () => import('@/page/boxFoure/boxFoure.vue')
import es6 from './modules/es6'
// const boxTwo = () => import('@/components/box22.vue')
export default [
  {
    path: '/',
    redirect: {name: 'boxThree'}
  },
  // box页面
  {
    path: '/box/:id',
    component: box,
    name: 'box',
    beforeEnter(to, from, next) {
      console.log('22222222222222222')
      console.log(to)
      console.log(from)
      console.log(next)
      console.log('22222222222222222')
      next()
    },
    children: [
      {
        path: 'box1',
        name: 'box1',
        component: box1,
        children: [
          {
            path: 'box11',
            name: 'box11',
            component: box11
          },
          {
            path: 'box22',
            name: 'box22',
            component: box22
          }
        ]
      }
    ]
  },
  // derolist页面
  {
    path: '/herolist',
    name: 'herolist',
    component: herolist
  },
  {
    path: '/boxTwo',
    name: 'boxTwo',
    component: boxTwo
  },
  {
    path: '/boxThree',
    name: 'boxThree',
    component: boxThree,
    meta: {
      keepLive: true
    },
    children: [
      {
        path: '0',
        name: '0'
      },
      {
        path: '1',
        name: '1'
      },
      {
        path: '2',
        name: '2'
      },
      {
        path: '3',
        name: '3'
      },
      {
        path: '4',
        name: '4'
      },
      {
        path: '5',
        name: '5'
      }
    ]
  },
  {
    path: '/boxFoure',
    name: 'boxFoure',
    component: boxFoure
  },
  ...es6
]
