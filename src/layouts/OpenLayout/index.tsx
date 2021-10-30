import styles from './index.less';
import React from 'react';
import { history, useParams } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import { routerLink } from '@/utils/utils'

// 接口请求数据MenuList
const MenuList = [
  {
    name: '公司概况',
    cmId: '111111111111111'
  },
  {
    name: '下属企业',
    cmId: '222222222222222'
  },
  {
    name: '荣誉墙',
    cmId: '333333333333333'
  },
  {
    name: '员工风采',
    cmId: '444444444444444'
  },
]
const OpenLayout: React.FC = ({ children }) => {

  const Header = <div className={styles.Header}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo1.jpg')} alt="" />
      </div>
      <div className={styles.MenuList}>
        <li className={styles.Selected}><a href="/Open">首页</a></li>
        {
          MenuList.map((v, m) => (
            <li key={m}>
              <a onClick={() => {
                // 先判断是否是外链=>直接跳转
                // 根据cmId查询子集=>根据子集第一个是否是单页面判断跳转到Detail还是List
                routerLink('Detail', { cid: 'cid1111', pid: v.cmId, fid: 'open' })
              }}>{v.name}</a>
            </li>
          ))
        }
        <li><a href="/Inside">文化宣传</a></li>
        <li><a href="/Oa">办公平台</a></li>
      </div>
    </div>
  </div>

  return <div className={styles.OpenLayout}>
    {Header}
    <div className={styles.Container}>{children}</div>
    <Footer />
  </div>;
};

export default OpenLayout;
