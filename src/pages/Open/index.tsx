import styles from './index.less'
import React, { useState, useEffect } from 'react'
import { } from 'umi';
import { } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import { useInterval } from 'ahooks';
import { getContentManageAPI, getColManageAPI } from '@/services/common'
import { checkStatusCode } from '@/utils/request'
import useModelHelp from '@/hooks/useModelHelp';

const colors = ['#632F00', '#00b10e', '#00bffe', '#2a72eb', '#F4B300', '#4e32a9', '#cf4020', '#61b118']
const Open: React.FC = () => {

    const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
    const { fragmentInfo } = modelState;
    const { otherData = {} } = fragmentInfo;
    const [typeContent, setTypeContent] = useState<any>({ typeContent_1: [], typeContent_4: [], typeContent_5: [], typeContent_6: [] })
    const { typeContent_1, typeContent_4, typeContent_5, typeContent_6 } = typeContent

    const [newsType, setNewsType] = useState<number>(1)
    const [breafNewIndex, setBreafNewIndex] = useState<number>(0)
    const [interval, setInterval] = useState<number | null>(null);
    const breafNews = typeContent_4.slice(0, 3) || []

    // 每3秒轮播一次
    useInterval(
        () => {
            breafNewIndex === 2 ? setBreafNewIndex(0) : setBreafNewIndex(breafNewIndex + 1);
        },
        interval,
        { immediate: false },
    );

    useEffect(() => {

    }, [])


    useEffect(() => {
        const { type1 = {}, type2 = {}, type3 = {}, type4 = {}, type5 = {}, type6 = {} } = otherData;
        type1.cmId && getColManage("typeContent_1", { parentId: type1.cmId, pageSize: 999, pageNum: 1 })
        type4.cmId && getContentManage("typeContent_4", { cmId: type4.cmId, pageSize: 7, pageNum: 1 })
        type5.cmId && getContentManage("typeContent_5", { cmId: type5.cmId, pageSize: 7, pageNum: 1 })
        type6.cmId && getContentManage("typeContent_6", { cmId: type6.cmId, pageSize: 7, pageNum: 1 })
    }, [otherData])

    const getContentManage = async (type: string, params: any) => {
        const response = await getContentManageAPI(params)
        if (checkStatusCode(response)) {
            const rows = response.rows || [];
            typeContent[type] = rows
            setTypeContent({ ...typeContent })
        }
    }

    const getColManage = async (type: string, params: any) => {
        const response = await getColManageAPI(params)
        if (checkStatusCode(response)) {
            const rows = response.data || [];
            typeContent[type] = rows
            setTypeContent({ ...typeContent })
        }
    }

    return <div className={styles.Open}>
        <div className={styles.Title}>
            <h2>{otherData["type1"]?.name}</h2>
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
                        typeContent_1?.map((v: any, m: number) => (
                            <SwiperSlide className={styles.SwiperSlide} key={m}>
                                <a onClick={() => {
                                    const { cmId, parentId, webUrl, singleWeb } = v
                                    if (webUrl) {
                                        window.open(webUrl)
                                    } else {
                                        singleWeb === '1' && (location.href = `/Detail/${cmId}/${parentId}/0/open`)
                                        singleWeb === '2' && (location.href = `/List/${cmId}/${parentId}/0/open`)
                                    }
                                }} style={{ background: colors[m % 8] }}>
                                    <img src={require('@/assets/images/icons1.png')} alt="" />
                                    {v.cmName}
                                </a>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div className={styles.Title}>
            <h2>{otherData["type3"]?.name}</h2>
        </div>
        <div className={styles.News}>
            {/* <div className={styles.NewsSwiper} onMouseOver={() => setInterval(null)} onMouseOut={() => setInterval(3000)}> */}
            <div className={styles.NewsSwiper} onMouseOver={() => setInterval(null)} onMouseOut={() => setInterval(null)}>
                <img onClick={() => {
                    // 跳转
                }} className={styles.CoverImg} src={breafNews[breafNewIndex]?.contentThumbnailList[0]?.url || require('@/assets/images/noImg.png')} alt="" />
                <div className={styles.Control}>
                    <div className={styles.Text}>{breafNews[breafNewIndex]?.conTitle}</div>
                    <p>
                        {
                            Array.from({ length: breafNews.length }).map((v, m) => (
                                <span key={m} className={breafNewIndex === m ? styles.Active : ''} onMouseOver={() => { setBreafNewIndex(m) }}></span>
                            ))
                        }
                    </p>
                </div>
            </div>
            <div className={styles.NewsList}>
                <div className={styles.NewsTitle}>
                    <span className={styles.Select}>{otherData["type4"]?.name}</span>
                </div>
                <ul>
                    {
                        typeContent_4?.map((v: any, m: number) => (
                            <li key={m}>
                                <a onClick={() => {
                                    const { cmId, conId, parentId } = v
                                    location.href = `/Detail/${cmId}/${parentId}/${conId}/open`
                                }}>{v.conTitle}</a>
                                <span>{v.createTime.substring(0, 10)}</span>
                            </li>
                        ))
                    }
                    <li></li>
                </ul>
                {
                    typeContent_4?.length > 0 && <div className={styles.More}>
                        <a onClick={() => {
                            const { cmId, parentId } = typeContent_4[0]
                            location.href = `/List/${cmId}/${parentId}/0/open`
                        }}>MORE+</a>
                    </div>
                }
            </div>
            <div className={styles.NewsList}>
                <div className={styles.NewsTitle}>
                    <span className={newsType === 1 ? styles.Select : ''} onMouseOver={() => { setNewsType(1) }}>{otherData["type5"]?.name}</span>
                    <span className={newsType === 2 ? styles.Select : ''} onMouseOver={() => { setNewsType(2) }}>{otherData["type6"]?.name}</span>
                </div>
                {
                    newsType === 1 && <>
                        <ul>
                            {
                                typeContent_5?.map((v: any, m: number) => (
                                    <li key={m}>
                                        <a onClick={() => {
                                            const { cmId, conId, parentId } = v
                                            location.href = `/Detail/${cmId}/${parentId}/${conId}/open`
                                        }}>{v.conTitle}</a>
                                        <span>{v.createTime.substring(0, 10)}</span>
                                    </li>
                                ))
                            }
                            <li></li>
                        </ul>
                        {
                            typeContent_5?.length > 0 && <div className={styles.More}>
                                <a onClick={() => {
                                    const { cmId, parentId } = typeContent_5[0]
                                    location.href = `/List/${cmId}/${parentId}/0/open`
                                }}>MORE+</a>
                            </div>
                        }
                    </>
                }
                {
                    newsType === 2 && <>
                        <ul>
                            {
                                typeContent_6?.map((v: any, m: number) => (
                                    <li key={m}>
                                        <a onClick={() => {
                                            const { cmId, conId, parentId } = v
                                            location.href = `/Detail/${cmId}/${parentId}/${conId}/open`
                                        }}>{v.conTitle}</a>
                                        <span>{v.createTime.substring(0, 10)}</span>
                                    </li>
                                ))
                            }
                            <li></li>
                        </ul>
                        {
                            typeContent_6?.length > 0 && <div className={styles.More}>
                                <a onClick={() => {
                                    const { cmId, parentId } = typeContent_6[0]
                                    location.href = `/List/${cmId}/${parentId}/0/open`
                                }}>MORE+</a>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    </div >
}

export default Open