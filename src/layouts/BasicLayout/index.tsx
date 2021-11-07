import styles from './index.less';
import React, { useState, useEffect } from 'react';
import { history, useParams } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import { routerLink } from '@/utils/utils'
import useModelHelp from '@/hooks/useModelHelp';
import { getMainColAPI } from '@/services/common'
import { checkStatusCode } from '@/utils/request'
import { PageLoading } from '@ant-design/pro-layout';

const BasisLayout: React.FC = ({ children }) => {

  // @ts-ignore
  const { cid, pid, nid, fid } = useParams()
  const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
  const { fragmentInfo } = modelState;
  const { topData = [] } = fragmentInfo;
  const [loading, setLoading] = useState<boolean>(false)
  const [menuList, setMenuList] = useState<any[]>([])

  useEffect(() => {
    const id = fid === 'open' ? 1 : fid === 'inside' ? 2 : 3
    dispatch({
      type: 'global/getFragmentManage',
      payload: { id }
    })
  }, [fid])

  useEffect(() => {
    if (fid === 'oa' && topData.length > 0) {
      getOaColManage(topData[0].cmId)
    }
  }, [topData])

  const getOaColManage = async (id: number) => {
    setLoading(true)
    const response = await getMainColAPI({ parentId: id, pageSize: 999, pageNum: 1 })
    if (checkStatusCode(response)) {
        const rows = response.data || [];
        setMenuList(rows)
    }
    setLoading(false)
}

  const getColManage = async (parentId: string) => {
    setLoading(true)
    const response = await getMainColAPI({ parentId: parentId })
    if (checkStatusCode(response)) {
      const { data = [] } = response
      if (data.length > 0) {
        const { id, webUrl, singleWeb } = data[0]
        if (webUrl) {
          window.open(webUrl)
        } else {
          singleWeb && (location.href = `/Detail/${id}/${parentId}/${nid}/${fid}`)
          !singleWeb && (location.href = `/List/${id}/${parentId}/${nid}/${fid}`)
        }
      }
    }
    setLoading(false)
  }

  if (loading) {
    return <PageLoading />
  }

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
          topData.map((v: any, m: number) => (
            <li key={m} className={+pid === v.cmId ? styles.Selected : ''}>
              <a onClick={() => {
                getColManage(v.cmId)
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

  const OaHeader = <div className={styles.Header}>
    <div className={styles.ContainerInner}>
      <div className={styles.Logo}>
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo-3.jpg')} alt="" />
      </div>
      <div className={styles.MenuList}>
        {
          menuList.map((v: any, m: number) => (
            <li key={m} className={pid == v.id ? styles.Selected : ''}>
              <a onClick={() => {
                if (v.webUrl) {
                    location.href = v.webUrl
                } else if (v.hasChild) {
                    routerLink('Detail', { cid: 0, pid: v.id, fid })
                } else {
                    v.singleWeb && routerLink('Detail', { cid: v.id, pid: topData[0].cmId, fid })
                    !v.singleWeb && routerLink('List', { cid: v.id, pid: topData[0].cmId, fid })
                }
              }}>{v.name}</a>
            </li>
          ))
        }
      </div>
    </div>
  </div>

  return <div className={styles.BasisLayout}>
    {['open', 'inside'].includes(fid) && Header}
    {['oa'].includes(fid) && OaHeader}
    <div className={styles.Container}>{children}</div>
    <Footer />
  </div>;
};

export default BasisLayout;
