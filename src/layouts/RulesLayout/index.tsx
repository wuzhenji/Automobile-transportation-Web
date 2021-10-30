import styles from './index.less';
import React from 'react';
import { history } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import classNames from 'classnames';


const MenuList = [
  {
    name: '规章制度',
    path: '/rules/index'
  },
  {
    name: '办公自动化系统',
    path: 'http://58.221.239.187:10013'
  },
  {
    name: '财务人力系统',
    path: 'http://58.221.14.202:1234'
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