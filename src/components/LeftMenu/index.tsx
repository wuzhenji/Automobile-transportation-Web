import React, { useState } from 'react';
import styles from './index.less'
import { useParams } from 'umi';
import { } from 'antd';
import { routerLink } from '@/utils/utils'

interface IProps {
    title: string;
    menuList: any[]
}
const LeftMenu: React.FC<IProps> = (props) => {

    const { title, menuList = [] } = props
    const { cid, pid, nid, fid } = useParams()

    return <div className={styles.LeftMenu}>
        <h2>{title}<span>导航</span></h2>
        <ul >
            {
                menuList.map((v, m) => (
                    <li key={m}>
                        <a className={styles.Select} onClick={() => {
                            v.isDetail && routerLink('Detail', { cid: 'cid1111', pid: v.id, fid })
                            !v.isDetail && routerLink('List', { cid: 'cid1111', pid: v.id, fid })
                        }}>{v.title}</a>
                    </li>
                ))
            }
        </ul>
    </div>;
};

export default LeftMenu;
