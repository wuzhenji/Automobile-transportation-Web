export default [
  { // 导航首页
    name: 'Navigation',
    path: '/',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Navigation',
  },
  { // 公众服务
    name: 'PublicService',
    path: '/publicservice',
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/layouts/PublicServiceLayout',
    routes: [
      { // 首页
        path: '/publicservice/index',
        component: '@/pages/PublicService',
      },
      { // 公司概况
        path: '/publicservice/company',
        component: '@/pages/PublicService/Company',
      },
      { // 下属企业
        path: '/publicservice/subcompany',
        component: '@/pages/PublicService/SubCompany',
      },
      { // 荣誉墙
        path: '/publicservice/honor',
        component: '@/pages/PublicService/Honor',
      },
      { // 员工风采
        path: '/publicservice/staff',
        component: '@/pages/PublicService/Staff',
      },
      { // 重定向
        path: '/publicservice',
        redirect: '/publicservice/index'
      }
    ]
  },
  { // 文化宣传
    name: 'Cultural',
    path: '/cultural',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/Cultural'
  },
  { // 办公平台
    name: 'OfficePlatform',
    path: '/officeplatform',
    wrappers: ['@/layouts/GlobalLayout/index'],
    component: '@/pages/OfficePlatform',
  },
  {
    component: './404',
  },
];
