import styles from './index.less';
import React from 'react';
import { history, useParams } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import { routerLink } from '@/utils/utils'

// 根据fid请求数据
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

const BasisLayout: React.FC = ({ children }) => {
  console.log(useParams())
  // @ts-ignore
  const { cid, pid, nid, fid } = useParams()

  const Header = <div className={styles.Header}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo-3.jpg')} alt="" />
      </div>
      <div className={styles.MenuList}>
        {
          fid === 'open' && <li><a href="/Open">首页</a></li>
        }
        {
          fid === 'inside' && <li><a href="/Inside">首页</a></li>
        }
        {
          MenuList.map((v, m) => (
            <li key={m} className={pid === v.cmId ? styles.Selected : ''}>
              <a onClick={() => {
                routerLink('Detail', { cid: 'cid1111', pid: v.cmId, fid })
              }}>{v.name}</a>
            </li>
          ))
        }
        {
          fid === 'open' && <li><a href="/Inside">文化宣传</a></li>
        }
        {
          fid === 'inside' && <li><a href="/Open">公众服务</a></li>
        }
        <li><a href="/Oa">办公平台</a></li>
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
