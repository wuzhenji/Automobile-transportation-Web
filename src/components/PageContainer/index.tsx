import React, { useState, useEffect } from 'react';
import styles from './index.less'
import { } from 'umi';
import { } from 'antd';
import LeftMenu from '@/components/LeftMenu'

interface IProps {
    title: string;
    menuList: any[]
}
const PageContainer: React.FC<IProps> = (props) => {
    const { title, menuList = [] } = props

    const [curMenu, setCurMenu] = useState<any>({})

    useEffect(() => {
        if (menuList.length) {
            setCurMenu(menuList[0])
        }
    }, [])

    return <>
        <div className={styles.PageContainer}>
            <LeftMenu title={title} menuList={menuList} select={(index) => setCurMenu(menuList[index])} />
            <div className={styles.RightContent}>
                <div className={styles.Location}>您当前的位置：<a href="/publicservice">{title}</a>>{curMenu.title}</div>
                <div className={styles.HTMLContent}>
                    <div dangerouslySetInnerHTML={{ __html: curMenu.content }}></div>
                </div>
            </div>
        </div>
    </>;
};

export default PageContainer;
