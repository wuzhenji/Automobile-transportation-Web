import styles from './index.less'
import React, { useState } from 'react'
import { } from 'umi';
import { } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import { useInterval } from 'ahooks';

const newsList = Array.from({ length: 7 }).map(v => (
    {

        title: '出门散心：不辜负春光 400名游客首400名游客首400名游客首400名游客首',
        time: '2020/04/01'
    }
))
const colors = ['#632F00', '#00b10e', '#00bffe', '#2a72eb', '#F4B300', '#4e32a9', '#cf4020', '#61b118']
const breafNews = [
    { title: '苏汽集团高管团队来我司调研交流', img: require('@/assets/images/dangshixx02.jpg') },
    { title: '以赛促学，南通汽运集团党史学习教育知识竞赛', img: require('@/assets/images/dangshixx03.png') },
    { title: '南通汽运集团召开党史学习教育专题党课暨党委', img: require('@/assets/images/dangshixx04.jpg') }
]
const Open: React.FC = () => {

    const [newsType, setNewsType] = useState<number>(1)
    const [breafNewIndex, setBreafNewIndex] = useState<number>(0)
    const [interval, setInterval] = useState<number | null>(3000);

    // 每3秒轮播一次
    useInterval(
        () => {
            breafNewIndex === 2 ? setBreafNewIndex(0) : setBreafNewIndex(breafNewIndex + 1);
        },
        interval,
        { immediate: false },
    );

    return <div className={styles.Open}>
        <div className={styles.Title}>
            <h2>公众服务</h2>
        </div>
        <div className={styles.ServiceBox}>
            <div className={styles.Left}>
                <a className={styles.Ticket} href="https://www.chebada.com/" target="_blank">
                    <i><img src={require('@/assets/images/icons1.png')} /></i>
                    <span>购票</span>
                </a>
                <a className={styles.Phone} href="https://www.chebada.com/" target="_blank">
                    <i><img src={require('@/assets/images/icons2.png')} /></i>
                </a>
            </div>
            <div className={styles.Right}>
                <Swiper
                    spaceBetween={18}
                    slidesPerView={4}
                    slidesPerColumn={2}
                    slidesPerColumnFill='row'
                >
                    {
                        Array.from({ length: 10 }).map((v, m) => (
                            <SwiperSlide className={styles.SwiperSlide} key={m}>
                                <a href="" style={{ background: colors[m % 8] }}>
                                    <img src={require('@/assets/images/icons1.png')} alt="" />出行服务
                                </a>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div className={styles.Title}>
            <h2>新闻报道</h2>
        </div>
        <div className={styles.News}>
            <div className={styles.NewsSwiper} onMouseOver={() => setInterval(null)} onMouseOut={() => setInterval(3000)}>
                <img onClick={() => {
                    // 跳转
                }} className={styles.CoverImg} src={breafNews[breafNewIndex].img} alt="" />
                <div className={styles.Control}>
                    <div className={styles.Text}>{breafNews[breafNewIndex].title}</div>
                    <p>
                        <span className={breafNewIndex === 0 ? styles.Active : ''} onMouseOver={() => { setBreafNewIndex(0) }}></span>
                        <span className={breafNewIndex === 1 ? styles.Active : ''} onMouseOver={() => { setBreafNewIndex(1) }}></span>
                        <span className={breafNewIndex === 2 ? styles.Active : ''} onMouseOver={() => { setBreafNewIndex(2) }}></span>
                    </p>
                </div>
            </div>
            <div className={styles.NewsList}>
                <div className={styles.NewsTitle}>
                    <span className={styles.Select}>集团新闻</span>
                </div>
                <ul>
                    {
                        newsList.map((v, m) => (
                            <li key={m}>
                                <a href="">{v.title}</a>
                                <span>{v.time}</span>
                            </li>
                        ))
                    }
                    <li></li>
                </ul>
                <div className={styles.More}>
                    <a href="">MORE+</a>
                </div>
            </div>
            <div className={styles.NewsList}>
                <div className={styles.NewsTitle}>
                    <span className={newsType === 1 ? styles.Select : ''} onMouseOver={() => { setNewsType(1) }}>招标公告</span>
                    <span className={newsType === 2 ? styles.Select : ''} onMouseOver={() => { setNewsType(2) }}>服务公告</span>
                </div>
                <ul>
                    {
                        newsList.map((v, m) => (
                            <li key={m}>
                                <a href="">{v.title}</a>
                                <span>{v.time}</span>
                            </li>
                        ))
                    }
                    <li></li>
                </ul>
                <div className={styles.More}>
                    <a href="">MORE+</a>
                </div>
            </div>
        </div>
    </div >
}

export default Open