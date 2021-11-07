import React, { useEffect, useState } from 'react';
import styles from './index.less'
import { history, useParams } from 'umi';
import TopBanner from '@/components/TopBanner'
import LeftMenu from '@/components/LeftMenu'
import { checkStatusCode } from '@/utils/request'
import { getMainColAPI, getMainContentAPI, getMainContentDetailAPI } from '@/services/common'
import { routerLink } from '@/utils/utils'
import { PageLoading } from '@ant-design/pro-layout';

const Company: React.FC = () => {

    // @ts-ignore
    const { cid, pid, nid, fid } = useParams()

    const [menuList, setMenuList] = useState<any[]>([])
    const [newsInfo, setNewsInfo] = useState<any>({})
    const curMenu = menuList.filter(v => v.id == cid)[0]
    const [loading, setLoading] = useState<boolean>(false)
    const [leftLoading, setLeftLoading] = useState<boolean>(false)

    if (curMenu?.id == cid && curMenu.hasChild) {
        console.log('zxczxczxc')
        routerLink('Detail', { cid: 0, pid: curMenu?.id, fid }, 'replace')
    }

    useEffect(() => {
        getColManage()
    }, [pid])

    useEffect(() => {
        if (nid != 0) {
            getMainContentDetail()
        } else {
            cid != 0 && getMainContent()
        }
    }, [cid, nid])

    const getColManage = async () => {
        setLeftLoading(true)
        const response = await getMainColAPI({ parentId: pid })
        if (checkStatusCode(response)) {
            const rows = response.data || [];
            if (rows.length > 0 && +cid === 0) {
                const { id, singleWeb } = rows[0]
                singleWeb && location.replace(`/Detail/${id}/${pid}/${nid}/${fid}`)
                !singleWeb && location.replace(`/List/${id}/${pid}/${nid}/${fid}`)
            } else {
                setMenuList(rows)
            }
        }
        setLeftLoading(false)
    }

    const getMainContent = async () => {
        setLoading(true)
        const response = await getMainContentAPI({ parentId: cid })
        if (checkStatusCode(response)) {
            const { rows = [] } = response
            if (rows.length > 0) {
                setNewsInfo(rows[0])
            } else {
                setNewsInfo({})
            }
        }
        setLoading(false)
    }

    const getMainContentDetail = async () => {
        setLoading(true)
        const response = await getMainContentDetailAPI({ id: nid })
        if (checkStatusCode(response)) {
            const { data = {} } = response
            setNewsInfo(data)
        }
        setLoading(false)
    }

    if (loading || leftLoading) {
        return <PageLoading />
    }

    return <div className={styles.Page}>
        <TopBanner />
        <div className={styles.PageContent}>
            <LeftMenu menuList={menuList} title={curMenu?.parentName} />
            <div className={styles.RightContent}>
                <div className={styles.Location}>您当前的位置：<a onClick={() => {
                    fid === 'open' && history.push('/Open')
                    fid === 'inside' && history.push('/Inside')
                    fid === 'oa' && history.push('/Oa')
                }}>{curMenu?.parentName}</a>>{curMenu?.name}</div>
                <div className={styles.HTMLContent}>
                    <div className={styles.ContentTitle}>{newsInfo.conTitle}</div>
                    <div className={"RichText"} dangerouslySetInnerHTML={{ __html: newsInfo.content }}></div>
                </div>
            </div>
        </div>
    </div>;
};

export default Company;
