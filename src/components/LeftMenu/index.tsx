import React, { useState } from 'react';
import styles from './index.less'
import { } from 'umi';
import { } from 'antd';

interface IProps {
    title: string;
    menuList: any[];
    select?: (index: number) => void
}
const LeftMenu: React.FC<IProps> = (props) => {

    const { title, menuList = [], select } = props

    const [curMenuIndex, setCurMenuIndex] = useState<number>(0)

    return <div className={styles.LeftMenu}>
        <h2>{title}<span>导航</span></h2>
        <ul >
            {
                menuList.map((v, m) => (
                    <li key={m}>
                        <a className={curMenuIndex === m ? styles.Select : ''} onClick={() => {
                            select?.(m)
                            setCurMenuIndex(m)
                        }}>{v.title}</a>
                    </li>
                ))
            }
        </ul>
    </div>;
};

export default LeftMenu;
