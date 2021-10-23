import styles from './index.less'
import React, { useState } from 'react'
import { } from 'umi';
import { } from 'antd';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const newsList = Array.from({ length: 7 }).map(v => (
    {

        title: '出门散心：不辜负春光 400名游客首400名游客首400名游客首400名游客首',
        time: '2020/04/01'
    }
))
const PublicService: React.FC = () => {

    const [newsType, setNewsType] = useState<number>(1)
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return <div className={styles.PublicService}>
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
                {/* <a href=""></a> */}
                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
            </div>
        </div>
        <div className={styles.Title}>
            <h2>新闻报道</h2>
        </div>
        <div className={styles.News}>
            <div className={styles.NewsSwiper}></div>
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
    </div>
}

export default PublicService