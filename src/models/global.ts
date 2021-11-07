import { IBaseModel } from '@/pages/index.d';
import { checkStatusCode } from '@/utils/request';
import { getFragmentManageAPI, getContentManageAPI, getColManageAPI } from '@/services/common'

interface IModelState {
  fragmentInfo: {
    topData?: any[]
    otherData?: {}
  }
}
const Model: IBaseModel<IModelState> = {
  namespace: 'global',
  state: {
    fragmentInfo: {},
  },
  effects: {
    // 碎片化管理首页内容
    *getFragmentManage({ payload }, { put, call, select, take }) {
      const response = yield getFragmentManageAPI(payload);
      if (checkStatusCode(response)) {
        const result = response.data || {};
        const topData = result.topData ? JSON.parse(result.topData) : [];
        const otherData = result.otherData ? JSON.parse(result.otherData) : {};
        const fragmentInfo = { topData, otherData }
        yield put({
          type: 'saveState',
          payload: { fragmentInfo },
        });
      }
    },
    *getContentManage({ payload }, { put, call, select, take }) {
      const { type, params } = payload
      const response = yield getContentManageAPI(params);
      if (checkStatusCode(response)) {
        const rows = response.rows || [];
        yield put({
          type: 'saveState',
          payload: { [type]: rows },
        });
      }
    },
    *getColManage({ payload }, { put, call, select, take }) {
      const { type, params } = payload
      const response = yield getColManageAPI(params);
      if (checkStatusCode(response)) {
        const rows = response.data || [];
        yield put({
          type: 'saveState',
          payload: { [type]: rows },
        });
      }
    }
  },
  reducers: {
    saveState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default Model;
