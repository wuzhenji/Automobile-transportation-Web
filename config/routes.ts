export default [
  {
    name: 'Home',
    path: '/home',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Home',
  },
  { // 导航首页
    name: 'Navigation',
    path: '/',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Navigation',
  },
  {
    component: './404',
  },
];
