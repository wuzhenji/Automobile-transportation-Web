import React from 'react';
import styles from './index.less'
import { history, useParams } from 'umi';
import { Input, Pagination } from 'antd';
import TopBanner from '@/components/TopBanner'
import LeftMenu from '@/components/LeftMenu'
import { routerLink } from '@/utils/utils'

const { Search } = Input;
// 根据pid获取menuList
const menuList = [{
    title: '公司简介',
    id: Math.floor(Math.random() * 100000),
    isDetail: true,
}, {
    title: '组织架构',
    id: Math.floor(Math.random() * 100000),
    isDetail: false,
}, {
    title: '发展历程',
    id: Math.floor(Math.random() * 100000),
    isDetail: false,
},]

const Company: React.FC = () => {

    const { cid, pid, nid, fid } = useParams()

    return <div className={styles.Page}>
        <TopBanner />
        <div className={styles.PageContent}>
            <LeftMenu menuList={menuList} title={"出行服务"} />
            <div className={styles.RightContent}>
                <div className={styles.Location}>您当前的位置：<a onClick={() => {
                    fid === 'open' && history.push('/Open')
                    fid === 'inside' && history.push('/Inside')
                    fid === 'oa' && history.push('/Oa')
                }}>{"出行服务"}</a>>{'旅客须知'}</div>
                <div className={styles.ContentInner}>
                    <div className={styles.SearchInput}>
                        <Search placeholder="" enterButton="搜索" size="large" loading={false} />
                    </div>
                    {
                        Array.from({ length: 6 }).map((v, m) => (
                            <div key={m} className={styles.ItemList}>
                                <div className={styles.ItemTitle}>
                                    <a onClick={() => {

                                    }}>通州公交部分线路调整</a>
                                    <span>2019/2/17 9:50:25</span>
                                </div>
                                <div className={styles.ItemContent} dangerouslySetInnerHTML={{ __html: '<p>南通机场大道新建通车，为实现该区域的公交覆盖，2019年2月17日起，通州区畅行公交公司调整该路，“<p>' }} ></div>
                                <div className={styles.ShowDetail}>
                                    <a onClick={() => {
                                        routerLink('Detail', { cid: 'cid1111', pid: '1111111', nid: '22222222', fid: 'inside' })
                                    }}></a>
                                </div>
                            </div>
                        ))
                    }
                    <Pagination className={styles.Pagination} size="small" total={50}
                        showTotal={(total) => (`共${total}条记录`)} />
                </div>
            </div>
        </div>
    </div>;
};

export default Company;
