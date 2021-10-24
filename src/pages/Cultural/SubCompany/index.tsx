import React from 'react';
import styles from './index.less'
import { } from 'umi';
import { } from 'antd';
import TopBanner from '@/components/TopBanner'
import PageContainer from '@/components/PageContainer'

const menuList = [{
    title: '公司简介',
    content: '<h1 style="text-align:center">南通汽运集团公司简介<h1>'
}, {
    title: '组织架构',
    content: '<h1 style="text-align:center">南通汽运集团组织架构<h1>'
}, {
    title: '发展历程',
    content: '<h1 style="text-align:center">南通汽运集团发展历程<h1>'
},]

const Company: React.FC = () => {

    return <div className={styles.Page}>
        <TopBanner />
        <div className={styles.PageContent}>
            <PageContainer title="下属企业" menuList={menuList} />
        </div>
    </div>;
};

export default Company;
