import React, { useEffect, useState } from 'react';
import styles from './index.less'
import { history, useParams } from 'umi';
import { Input, Pagination, Spin } from 'antd';
import TopBanner from '@/components/TopBanner'
import LeftMenu from '@/components/LeftMenu'
import { routerLink } from '@/utils/utils'
import { checkStatusCode } from '@/utils/request'
import { getMainColAPI, getMainContentAPI } from '@/services/common'
import { PageLoading } from '@ant-design/pro-layout';

const { Search } = Input;

const Company: React.FC = () => {

    const { cid, pid, nid, fid } = useParams()

    const [menuList, setMenuList] = useState<any[]>([])
    const [newsList, setNewsList] = useState<any[]>([])
    const [searchParams, setSearchParams] = useState<any>({
        pageNum: 1,
        pageSize: 6,
        name: ''
    })
    const [total, setTotal] = useState<number>(0)
    const curMenu = menuList.filter(v => v.id == cid)[0]
    const [loading, setLoading] = useState<boolean>(false)
    const [leftLoading, setLeftLoading] = useState<boolean>(false)

    useEffect(() => {
        getColManage()
    }, [pid])

    useEffect(() => {
        cid && getMainContent()
    }, [cid, searchParams])

    if (curMenu?.id == cid && curMenu.hasChild) {
        routerLink('Detail', { cid: 0, pid: curMenu?.id, fid }, 'replace')
    }

    const getColManage = async () => {
        setLeftLoading(true)
        const response = await getMainColAPI({ parentId: pid, pageSize: 999, pageNum: 1 })
        if (checkStatusCode(response)) {
            const rows = response.data || [];
            if (rows.length > 0 && +cid === 0) {
                const { cmId, singleWeb } = rows[0]
                singleWeb == '1' && routerLink('Detail', { cid: cmId, pid, nid, fid }, 'replace')
                singleWeb == '2' && routerLink('List', { cid: cmId, pid, nid, fid }, 'replace')
            } else {
                setMenuList(rows)
            }
        }
        setLeftLoading(false)
    }

    const getMainContent = async () => {
        setLoading(true)
        const response = await getMainContentAPI({ parentId: cid, ...searchParams })
        if (checkStatusCode(response)) {
            const { rows = [], total = 0 } = response
            setNewsList(rows)
            setTotal(total)
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
                <div className={styles.ContentInner}>
                    <div className={styles.SearchInput}>
                        <Search placeholder="" enterButton="搜索" size="large" loading={false} onSearch={(value) => {
                            setSearchParams({ ...searchParams, pageNum: 1, name: value })
                        }} />
                    </div>
                    {
                        newsList.map((v, m) => (
                            <div key={m} className={styles.ItemList}>
                                <div className={styles.ItemHead}>
                                    {
                                        v.contentThumbnailList.length > 0 && <div className={styles.ItemCover}>
                                            <img src={v.contentThumbnailList[0]?.url} alt="" />
                                        </div>
                                    }
                                    <div className={styles.ItemInner}>
                                        <div className={styles.ItemTitle}>
                                            <a onClick={() => {
                                                window.open(`/Detail/${cid}/${pid}/${v.conId}/${fid}`)
                                            }}>{v.conTitle}</a>
                                            <span>{v.createTime}</span>
                                        </div>
                                        <div className={styles.ItemContent} >{v.text}</div>
                                    </div>
                                </div>
                                <div className={styles.ShowDetail}>
                                    <a onClick={() => {
                                        window.open(`/Detail/${cid}/${pid}/${v.conId}/${fid}`)
                                    }}></a>
                                </div>
                            </div>
                        ))
                    }
                    <Pagination className={styles.Pagination} size="small" total={total} pageSize={searchParams.pageSize} current={searchParams.pageNum}
                        showTotal={(total) => (`共${total}条记录`)} onChange={(page) => {
                            setSearchParams({ ...searchParams, pageNum: page })
                        }} />
                </div>
            </div>
        </div>
    </div>;
};

export default Company;
