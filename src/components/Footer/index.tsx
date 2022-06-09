
import { Space } from "antd";
import styles from './index.less'

export default () => {
  const companyName = '南通汽运实业集团有限公司版权';
  const recordNo = '苏ICP备16025088号-1';
  const address = '南通市江海大道269号（原永兴车站）';
  const phone = '0513-85155315';

  return <div className={styles.Footer}>
    <div className={styles.FooterInner}>
      <Space>
        <span>{companyName}</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">{recordNo}</a>
        <span>地址：{address}</span>
        <span>服务质量投诉电话：{phone}</span>
        <span>技术支持：科信处</span>
      </Space>
    </div>
  </div>;
};
