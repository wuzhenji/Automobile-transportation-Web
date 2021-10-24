export default [
  { // 导航首页
    name: 'Navigation',
    path: '/',
    wrappers: ['@/layouts/GlobalLayout'],
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
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/layouts/CulturalLayout',
    routes: [
      { // 首页
        path: '/cultural/index',
        component: '@/pages/Cultural',
      },
      { // 公司概况
        path: '/cultural/company',
        component: '@/pages/Cultural/Company',
      },
      { // 下属企业
        path: '/cultural/subcompany',
        component: '@/pages/Cultural/SubCompany',
      },
      { // 荣誉墙
        path: '/cultural/honor',
        component: '@/pages/Cultural/Honor',
      },
      { // 大事记
        path: '/cultural/memorabilia',
        component: '@/pages/Cultural/Memorabilia',
      },
      { // 建党专栏
        path: '/cultural/party',
        component: '@/pages/Cultural/Party',
      },
      { // 重定向
        path: '/cultural',
        redirect: '/cultural/index'
      }
    ]
  },
  { // 文化宣传
    name: 'Rules',
    path: '/rules',
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/layouts/RulesLayout',
    routes: [
      { // 首页
        path: '/rules/index',
        component: '@/pages/Rules',
      },
      { // 重定向
        path: '/rules',
        redirect: '/rules/index'
      }
    ]
  },
  { // 办公平台
    name: 'OfficePlatform',
    path: '/officeplatform',
    wrappers: ['@/layouts/GlobalLayout'],
    component: '@/pages/OfficePlatform',
  },
  {
    component: './404',
  },
];
