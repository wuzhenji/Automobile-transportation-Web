import styles from './index.less'
import React, { useState, useEffect } from 'react'
import {  } from 'umi'
import { } from 'antd'

const Feedback: React.FC = () => {

    return <div className={styles.Feedback}>
        
        <div className={styles.FeedbackBg}>
            <img src={require('@/assets/images/feedbackbg.jpg')} alt="" />
        </div>
    </div>
}

export default Feedback