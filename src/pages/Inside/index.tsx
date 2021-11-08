import styles from './index.less'
import React, { useState, useEffect } from 'react'
import { } from 'umi'
import { } from 'antd'
import { getContentManageAPI } from '@/services/common'
import { checkStatusCode } from '@/utils/request'
import useModelHelp from '@/hooks/useModelHelp';

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

    const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
    const { fragmentInfo } = modelState;
    const { otherData = {} } = fragmentInfo;

    const [typeContent, setTypeContent] = useState<any>({ typeContent_1: [], typeContent_2: [] })
    const { typeContent_1, typeContent_2 } = typeContent

    useEffect(() => {
        const { type1 = {}, type2 = {} } = otherData;
        type1.cmId && getContentManage("typeContent_1", { cmId: type1.cmId, pageSize: 6, pageNum: 1 })
        type2.cmId && getContentManage("typeContent_2", { cmId: type2.cmId, pageSize: 12, pageNum: 1 })
    }, [otherData])

    const getContentManage = async (type: string, params: any) => {
        const response = await getContentManageAPI(params)
        if (checkStatusCode(response)) {
            const rows = response.rows || [];
            typeContent[type] = rows
            setTypeContent({ ...typeContent })
        }
    }

    return <div className={styles.Cultural}>
        <div className={styles.Banner}></div>
        <div className={styles.Content}>
            <a href="/" className={styles.Navigation}>>返回首页</a>
            <div className={styles.News}>
                <div className={styles.NewsCover}>
                    <img src={typeContent_1[0]?.contentThumbnailList[0]?.url} alt="" />
                    <div className={styles.NewsCoverInfo}>
                        <span>{typeContent_1[0]?.conTitle}</span>
                        <a onClick={() => {
                            const { cmId, parentId } = typeContent_1[0]
                            location.href = `/List/${cmId}/${parentId}/0/inside`
                        }}>更多</a>
                    </div>
                </div>
                <div className={styles.NewsList}>
                    {
                        typeContent_1?.map((v: any, m: number) => (
                            <li key={m}>
                                <a onClick={() => {
                                    const { cmId, conId, parentId } = v
                                    location.href = `/Detail/${cmId}/${parentId}/${conId}/inside`
                                }} target="_blank">· {v.conTitle}</a>
                            </li>
                        ))
                    }
                </div>
            </div>
            <a href="https://www.12371.cn/dsxx/" target="_blank" className={styles.ImgHref}>
                <img src={require('@/assets/images/dangshixx06.jpg')} alt="" />
            </a>
            <div className={styles.Title}>
                <div className={styles.Text}>
                    <img src={require('@/assets/images/dangshixx07.png')} alt="" />
                    <a>{otherData["type2"]?.name}</a>
                </div>
                <a onClick={() => {
                    const { cmId, parentId } = typeContent_2[0]
                    location.href = `/List/${cmId}/${parentId}/0/inside`
                }} className={styles.More}>更多+</a>
            </div>
            <div className={styles.Dynamic}>
                <ul>
                    <div className={styles.ImgTop1}>
                        <img src={require('@/assets/images/dangshixx02.jpg')} alt="" />
                        <img src={require('@/assets/images/dangshixx03.png')} alt="" />
                    </div>
                    <div className={styles.ImgTop2}>
                        <img src={require('@/assets/images/dangshixx04.jpg')} alt="" />
                        <img src={require('@/assets/images/dangshixx05.jpg')} alt="" />
                    </div>
                </ul>
            </div>
            <div className={styles.Newlist}>
                {
                    typeContent_2?.map((v: any, m: number) => (
                        <li key={m}>
                            <a onClick={() => {
                                const { cmId, conId, parentId } = v
                                location.href = `/Detail/${cmId}/${parentId}/${conId}/inside`
                            }}>· {v.conTitle}</a>
                        </li>
                    ))
                }
            </div>
        </div>
        <div className={styles.Blank}></div>
    </div>
}

export default Cultural