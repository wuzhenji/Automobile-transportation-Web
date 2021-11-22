import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  // 蓝
  primaryColor: '#2e91c2',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '南通汽运实业集团有限公司',
  pwa: false,
  logo: '/logo.png',
  iconfontUrl: '',
};

export default Settings;
