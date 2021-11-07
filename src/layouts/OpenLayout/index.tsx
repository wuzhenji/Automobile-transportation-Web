import styles from './index.less';
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { } from 'antd';
import Footer from '@/components/Footer';
import useModelHelp from '@/hooks/useModelHelp';
import { getMainColAPI } from '@/services/common'
import { checkStatusCode } from '@/utils/request'
import { PageLoading } from '@ant-design/pro-layout';

const OpenLayout: React.FC = ({ children }) => {

  const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
  const { fragmentInfo } = modelState;
  const { topData = [] } = fragmentInfo;
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch({
      type: 'global/getFragmentManage',
      payload: { id: 1 }
    })
  }, [])

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
          singleWeb && (location.href = `/Detail/${id}/${parentId}/0/open`)
          !singleWeb && (location.href = `/List/${id}/${parentId}/0/open`)
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
        <img onClick={() => history.push('/')} src={require('@/assets/images/logo1.jpg')} alt="" />
      </div>
      <div className={styles.MenuList}>
        <li className={styles.Selected}><a href="/Open">首页</a></li>
        {
          topData.map((v: any, m: number) => (
            <li key={m}>
              <a onClick={() => {
                // 先判断是否是外链=>直接跳转
                // 根据cmId查询子集=>根据子集第一个是否是单页面判断跳转到Detail还是List
                getColManage(v.cmId)
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
