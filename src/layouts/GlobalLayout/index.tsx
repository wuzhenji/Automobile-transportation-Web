import { } from 'umi';
import { } from 'antd';
import styles from './index.less';
import React, { useEffect } from 'react';
import useModelHelp from '@/hooks/useModelHelp';
import { PageLoading } from '@ant-design/pro-layout';
import classNames from 'classnames';

const GlobalLayout: React.FC = ({ children }) => {
  const [modelState, { dispatch }] = useModelHelp({ namespace: 'global' });
  const { userInfo } = modelState;
  const actions = {
    initData: 'global/initData',
  };

  useEffect(() => {
    if (!userInfo) {
      dispatch({
        type: actions.initData,
      });
    }
  }, [userInfo]);

  if (!userInfo) {
    return <PageLoading />;
  }

  // 做登录验证
  return <div className={classNames(styles.GlobalLayout, 'InnerWidth')}>{children}</div>;
};

export default GlobalLayout;
