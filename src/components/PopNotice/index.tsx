import {useInterval, useSize} from 'ahooks';
import React, {useEffect, useRef, useState} from 'react'
import styles from './index.less'

interface IProps {
  onClose: () => void
}
let interval = 0
let mx = 10, my = 10; //  每次移动的像素
let mw = 0, mh = 0; //  移动总量
const ZtPage: React.FC<IProps> = (props) => {

  const vw = window.innerWidth
  const vh = window.innerHeight

  useEffect(() => {
    autoPlay()
  }, [])

  const autoPlay = () => {
    const noticebox = document.getElementById("noticebox")
    const boxWidth = noticebox.clientWidth
    const boxHeight = noticebox.clientHeight
    interval = 0;
    interval = setInterval(function () {
      mw = mw + mx;
      mh = mh + my;
      if (mw >= vw - boxWidth || mw <= 0) {
        mx = -1 * mx;
      }
      if (mh >= vh - boxHeight || mh <= 0) {
        my = -1 * my;
      }
      noticebox.style.top = mh + 'px'
      noticebox.style.left = mw + 'px'
    }, 100)
  }

  return <div id={"noticebox"} className={styles.ztPage} onMouseMove={() => {
    clearInterval(interval);
  }} onMouseLeave={() => {
    clearInterval(interval);
    autoPlay()
  }} >
    <div className={styles.CloseBtn} onClick={() => {
      clearInterval(interval);
      props.onClose?.()
    }}>关闭</div>
    <div className={styles.Inner}>
      <div className={styles.NoticeTitle}>巡察公告</div>
      <div className={styles.NoticeContent}>
        &nbsp;&nbsp;&nbsp;&nbsp;根据市委统一部署，市委第二巡察组于2023年3月1日至4月28日，对南通汽运实业集团有限公司党委开展巡察。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;此次巡察的重点是：紧盯被巡察党组织职能责任，聚焦党中央各项决策部署在基层的落实情况，深入了解被巡察党组织学习贯彻习近平新时代中国特色社会主义思想，加强党的政治建设，贯彻全面深化改革决策部署，防范化解重大风险等情况；聚焦群众身边腐败问题和不正之风以及群众反映强烈的问题，深入了解被巡察党组织履行全面从严治党“两个责任”，领导干部遵守纪律和廉洁从政，作风建设特别是深化整治形式主义官僚主义顽瘴痼疾等情况；聚焦基层党组织建设，深入了解被巡察党组织领导班子建设、选人用人、基层党建、干部担当作为，以及各项监督发现问题整改落实等情况。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;巡察组将通过听取汇报、个别谈话、受理信访、调阅资料、走访调研等方式开展工作。巡察期间，巡察组主要受理反映被巡察党组织领导班子及其成员、下一级主要负责人以及相关岗位干部（含已退休、已调离）的信访举报。其他不属于巡察受理范围的信访问题，将按规定转交有关方面处理。<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;受理信访期间（3月1日至4月25日），巡察组设专门举报电话：0513～85718178；18962966902（接受短信举报），接听电话时间：工作日9:00—17:30；信访件邮寄地址：南通市崇川区江海大道269号南通汽运实业集团有限公司二楼3号会议室，邮编：226005。
      </div>
      <div className={styles.NoticeFooter}>南通市委第二巡察组</div>
      <div className={styles.NoticeFooter}>2023年3月1日</div>
    </div>
  </div>
}
export default ZtPage
