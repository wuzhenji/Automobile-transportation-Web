import styles from './index.less'
import React, { useState, useEffect } from 'react'
import { useParams } from 'umi'
import { } from 'antd'
import { routerLink } from '@/utils/utils'
import { checkStatusCode } from '@/utils/request'
import { getMainColAPI } from '@/services/common'
import { PageLoading } from '@ant-design/pro-layout';
import useModelHelp from '@/hooks/useModelHelp';

const Oa: React.FC = () => {

    // @ts-ignore
    const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
    const { fragmentInfo } = modelState;
    const { topData = [] } = fragmentInfo;

    const [menuList, setMenuList] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (topData.length > 0) {
            getColManage(topData[0].cmId)
        }
    }, [topData])

    useEffect(() => {
        dispatch({
            type: 'global/getFragmentManage',
            payload: { id: 3 }
        })
    }, [])

    const getColManage = async (id: number) => {
        setLoading(true)
        const response = await getMainColAPI({ parentId: id, pageSize: 999, pageNum: 1 })
        if (checkStatusCode(response)) {
            const rows = response.data || [];
            setMenuList(rows)
        }
        setLoading(false)
    }

    if (loading) {
        return <PageLoading />
    }

    return <div className={styles.Oa}>
        <div className={styles.Logo}>
            <img src={require("@/assets/images/logo.png")} alt="" />
        </div>
        <div className={styles.CardList}>
            {
                menuList.map(v => (
                    <div className={styles.CardItem} key={v.id}>
                        <img src="" alt="" />
                        <h2>{v.name}</h2>
                        <a onClick={() => {
                            if (v.webUrl) {
                                location.href = v.webUrl
                            } else if (v.hasChild) {
                                routerLink('Detail', { cid: 0, pid: v.id, fid: 'oa' })
                            } else {
                                v.singleWeb && routerLink('Detail', { cid: v.id, pid: topData[0].cmId, fid: 'oa' })
                                !v.singleWeb && routerLink('List', { cid: v.id, pid: topData[0].cmId, fid: 'oa' })
                            }
                        }} className={styles.LinkBtn}>{v.webUrl ? '立即登录' : '点击查看'}</a>
                    </div>
                ))
            }
        </div>
    </div>
}

export default Oa