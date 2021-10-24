import styles from './index.less';
import React from 'react';
import { history } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import classNames from 'classnames';


const MenuList = [
  {
    name: '首页',
    path: '/cultural/index'
  },
  {
    name: '公司概况',
    path: '/cultural/company'
  },
  {
    name: '下属企业',
    path: '/cultural/subcompany'
  },
  {
    name: '荣誉墙',
    path: '/cultural/honor'
  },
  {
    name: '大事记',
    path: '/cultural/memorabilia'
  },
  {
    name: '公众服务',
    path: '/publicservice'
  },
  {
    name: '办公平台',
    path: '/officeplatform'
  },
  {
    name: '云学堂',
    path: 'http://ntqyjt.21tb.com/login/login.init.do?&elnScreen=1280*1024elnScreen'
  },
]
const BasisLayout: React.FC = ({ children }) => {

  const { pathname = '' } = history.location

  const Header = <div className={classNames(styles.Header, styles.Header2)}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo-3.jpg')} alt="" />
      </div>
      <div className={styles.MenuList2}>
        {
          MenuList.map((v, m) => (
            <li key={m} className={pathname === v.path ? styles.Selected : ''}>
              <a href={v.path}>{v.name}</a>
            </li>
          ))
        }
      </div>
    </div>
  </div>

  return <div className={styles.BasisLayout}>
    {Header}
    <div className={styles.Container}>{children}</div>
    <Footer />
  </div>;
};

export default BasisLayout;
