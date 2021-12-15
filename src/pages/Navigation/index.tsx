import styles from './index.less'
import React, { useState, useEffect } from 'react'
import { } from 'umi'
import { Space } from 'antd'
import Footer from '@/components/Footer'
import Iconfont from '@/components/Iconfont'
import useModelHelp from '@/hooks/useModelHelp';

const swiperBg = [
    require('@/assets/images/navbg-01.jpg'),
    require('@/assets/images/navbg-02.jpg'),
    require('@/assets/images/navbg-03.jpg'),
    require('@/assets/images/navbg-04.jpg'),
    require('@/assets/images/navbg-05.jpg'),
]
const Navigation: React.FC = () => {
    
    const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
    const { advertisement } = modelState;
    const [swiperBgIndex, setSwiperBgIndex] = useState<number>(0)
    const [showNotice, setShowNotice] = useState<boolean>(true)

    useEffect(() =>{
        dispatch({
            type: 'global/getAdvertisement',
            payload: {
                pageNum: 1,
                pageSize: 1
            }
        })
    },[])

    return <div className={styles.Navigation}>
        <div className={styles.NavigationInner}>
            <div className={styles.NavBg}>
                <img onClick={() => {
                    swiperBgIndex !== 4 && setSwiperBgIndex(c => c + 1)
                    swiperBgIndex === 4 && setSwiperBgIndex(0)
                }} src={swiperBg[swiperBgIndex]} alt="" />
            </div>
            {
                showNotice && advertisement.id && <div className={styles.Notice}>
                    <a target="_blank">
                        <img src={`${(window as any).env.bizApi}${advertisement?.picInfo}`} alt="" />
                    </a>
                    <span onClick={() => setShowNotice(false)}>关闭</span>
                </div>
            }
            <div className={styles.Logo}>
                <img src={require('@/assets/images/logo.png')} alt="" />
            </div>
            <div className={styles.NavBtns}>
                <Space>
                    <a href="/Open" target="_blank">公众服务</a>
                    <a href="/Inside" target="_blank">文化宣传</a>
                    <a href="/Oa" target="_blank" >办公平台</a>
                </Space>
            </div>
        </div>
        <Footer />
    </div>
}

export default Navigation