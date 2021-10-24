import styles from './index.less'
import React from 'react'
import { } from 'umi'
import { } from 'antd'

const OfficePlatform: React.FC = () => {
    return <div className={styles.OfficePlatform}>
        <div className={styles.Logo}>
            <img src={require("@/assets/images/logo.png")} alt="" />
        </div>
        <div className={styles.CardList}>
            <div className={styles.CardItem}>
                <img src="" alt="" />
                <h2>规章制度</h2>
                <a href="/rules/index" className={styles.LinkBtn}>点击查看</a>
            </div>
            <div className={styles.CardItem}>
                <img src="" alt="" />
                <h2>办公自动化系统</h2>
                <a href="http://58.221.239.187:10013" className={styles.LinkBtn}>立即登录</a>
            </div>
            <div className={styles.CardItem}>
                <img src="" alt="" />
                <h2>财务人力系统</h2>
                <a href="http://58.221.14.202:1234" className={styles.LinkBtn}>立即登录</a>
            </div>
            <div className={styles.CardItem}>
                <img src="" alt="" />
                <h2>云学堂</h2>
                <a href="http://ntqyjt.21tb.com/login/login.init.do?&elnScreen=1280*1024elnScreen" className={styles.LinkBtn}>立即登录</a>
            </div>
        </div>
    </div>
}

export default OfficePlatform