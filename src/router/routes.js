// const Frist = () => import('@/page/frist.vue')
// const HelloWord = () => import('@/components/HelloWorld.vue')
// export default [
//     {
//         path: '/frist',
//         name: 'frist',
//         component: Frist,
//         beforeEnter: (to, from, next) => {
//             console.log(from.path)
//             if (from.path !== '/helloword') {
//                 console.log(1)
//                 return
//             }   
//             next()
//         }
//     },
//     //项目的外层container布局
//     {
//         path: '/helloword',
//         name: 'helloword',
//         component: HelloWord
//     }
// ]
const box = () => import('@/page/content/box.vue')
const herolist = () => import('@/page/content/herolist.vue')
export default [
    {
        path: '/',
        redirect: '/box'
    },
    //box页面
    {
        path: '/box', component: box, name: 'box'
    },
    //derolist页面
    {
        path: '/herolist',
        name: 'herolist',
        component: herolist
    }
]