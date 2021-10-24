import styles from './index.less'
import React from 'react'
import { } from 'umi'
import { } from 'antd'

const newsList = [
    {
        title: '· 交通运输部党组理论学习中心组举行2021年第九次集体学习'
    },
    {
        title: '· 交通运输部继续定点帮扶对口支援川赣五县'
    },
    {
        title: '· 交通运输部修改废止14件规章'
    },
    {
        title: '· 李小鹏在部党组党史学习教育第二次工作交流推进会上强调 在党'
    },
    {
        title: '· 李小鹏主持召开部党组党史学习教育领导小组第三次会议'
    },
    {
        title: '· 李小鹏主持召开部务会 强调贯彻落实习近平总书记“七一”重要重要重要重要重要'
    },
]
const Cultural: React.FC = () => {
    return <div className={styles.Cultural}>
        <div className={styles.Banner}></div>
        <div className={styles.Content}>
            <a href="/" className={styles.Navigation}>>返回首页</a>
            <a href="https://www.12371.cn/dsxx/" target="_blank" className={styles.ImgHref}>
                <img src={require('@/assets/images/dangshixx06.jpg')} alt="" />
            </a>
            <div className={styles.Title}>
                <div className={styles.Text}>
                    <img src={require('@/assets/images/dangshixx07.png')} alt="" />
                    <a href="">基层动态</a>
                </div>
                <a href="" className={styles.More}>更多+</a>
            </div>
            <div className={styles.Dynamic}>
                <ul>
                    <div className={styles.ImgTop1}>
                        <img src={require('@/assets/images/dangshixx02.jpg')} alt="" />
                        <img src={require('@/assets/images/dangshixx03.png')} alt="" />
                    </div>
                    {
                        newsList.map((v, m) => (
                            <li key={m}>
                                <a href="">{v.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    <div className={styles.ImgTop2}>
                        <img src={require('@/assets/images/dangshixx04.jpg')} alt="" />
                        <img src={require('@/assets/images/dangshixx05.jpg')} alt="" />
                    </div>
                    {
                        newsList.map((v, m) => (
                            <li key={m}>
                                <a href="">{v.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className={styles.Blank}></div>
    </div>
}

export default Cultural