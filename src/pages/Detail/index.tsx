import React from 'react';
import styles from './index.less'
import { history, useParams } from 'umi';
import { } from 'antd';
import TopBanner from '@/components/TopBanner'
import LeftMenu from '@/components/LeftMenu'

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
                <div className={styles.HTMLContent}>
                    <div dangerouslySetInnerHTML={{ __html: 'bababbababaab' }}></div>
                </div>
            </div>
        </div>
    </div>;
};

export default Company;
