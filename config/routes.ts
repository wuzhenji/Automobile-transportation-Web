export default [
  { // 导航首页
    name: 'Navigation',
    path: '/',
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/pages/Navigation',
  },
  { // 公众服务
    name: 'Open',
    path: '/Open',
    wrappers: ['@/layouts/GlobalLayout', '@/layouts/OpenLayout'],
    component: '@/pages/Open'
  },
  { // 文化宣传
    name: 'Inside',
    path: '/Inside',
    wrappers: ['@/layouts/GlobalLayout', '@/layouts/InsideLayout'],
    component: '@/pages/Inside'
  },
  // { // 文化宣传
  //   name: 'Rules',
  //   path: '/rules',
  //   wrappers: ['@/layouts/GlobalLayout'],
  //   component: '@/layouts/RulesLayout',
  //   routes: [
  //     { // 首页
  //       path: '/rules/index',
  //       component: '@/pages/Rules',
  //     },
  //     { // 重定向
  //       path: '/rules',
  //       redirect: '/rules/index'
  //     }
  //   ]
  // },
  { // 办公平台
    name: 'Oa',
    path: '/Oa',
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/pages/Oa',
  },
  {
    name: 'Detail',
    path: '/Detail/:cid/:pid/:nid/:fid',
    wrappers: ['@/layouts/GlobalLayout', '@/layouts/BasicLayout'],
    component: '@/pages/Detail',
  },
  {
    name: 'List',
    path: '/List',
    wrappers: ['@/layouts/GlobalLayout', '@/layouts/BasicLayout'],
    component: '@/pages/List',
  },
  {
    component: './404',
  },
];
