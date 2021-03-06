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
                        <a className={+cid === v.id ? styles.Select : ''} onClick={() => {
                            if (v.webUrl) {
                                location.href = v.webUrl
                            } else if (v.hasChild) {
                                routerLink('Detail', { cid: 0, pid: v.id, fid })
                            } else {
                                v.singleWeb && routerLink('Detail', { cid: v.id, pid: pid, fid })
                                !v.singleWeb && routerLink('List', { cid: v.id, pid: pid, fid })
                            }
                        }}>{v.name}</a>
                    </li>
                ))
            }
        </ul>
    </div>;
};

export default LeftMenu;
