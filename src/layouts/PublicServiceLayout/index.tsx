import styles from './index.less';
import React from 'react';
import { history } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import classNames from 'classnames';


const MenuList = [
  {
    name: '公司概况',
    path: '/publicservice/company'
  },
  {
    name: '下属企业',
    path: '/publicservice/subcompany'
  },
  {
    name: '荣誉墙',
    path: '/publicservice/honor'
  },
  {
    name: '员工风采',
    path: '/publicservice/staff'
  },
  {
    name: '文化宣传',
    path: '/cultural'
  },
  {
    name: '办公平台',
    path: '/officeplatform'
  },
]
const BasisLayout: React.FC = ({ children }) => {

  const { pathname = '' } = history.location

  const Header1 = <div className={classNames(styles.Header, styles.Header1)}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo1.jpg')} alt="" />
      </div>
      <div className={styles.MenuList}>
        <li className={styles.Selected}><a href="/publicservice/index">首页</a></li>
        {
          MenuList.map((v, m) => (
            <li>
              <a href={v.path}>{v.name}</a>
            </li>
          ))
        }
      </div>
    </div>
  </div>

  const Header2 = <div className={classNames(styles.Header, styles.Header2)}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo-3.jpg')} alt="" />
      </div>
      <div className={styles.MenuList2}>
        <li><a href="/publicservice/index">首页</a></li>
        {
          MenuList.map((v, m) => (
            <li className={pathname === v.path ? styles.Selected : ''}>
              <a href={v.path}>{v.name}</a>
            </li>
          ))
        }
      </div>
    </div>
  </div>

  return <div className={styles.BasisLayout}>
    {pathname === '/publicservice/index' ? Header1 : Header2}
    <div className={styles.Container}>{children}</div>
    <Footer />
  </div>;
};

export default BasisLayout;
