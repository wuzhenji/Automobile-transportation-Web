import { IBaseModel } from '@/pages/index.d';
import { checkStatusCode } from '@/utils/request';
import { getFragmentManageAPI, getContentManageAPI, getColManageAPI, getAdvertisementAPI } from '@/services/common'
import { autoLogin, queryCurrentUser } from '@/services/user'
import { setStorage } from '@/utils/localstorage'

interface IModelState {
  userInfo: {} | null;
  fragmentInfo: {
    topData?: any[]
    otherData?: {}
  },
  advertisement: {}
}
const Model: IBaseModel<IModelState> = {
  namespace: 'global',
  state: {
    userInfo: null,
    fragmentInfo: {},
    advertisement: {}
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
    *initData({ payload }, { put, call, select, take }) {
      const response = yield queryCurrentUser(payload)
      if (checkStatusCode(response)) {
        const userInfo = response.data || {}
        yield put({
          type: 'saveState',
          payload: {
            userInfo
          }
        })
      } else {
        yield put({ type: 'autoLogin' })
      }
    },
    *autoLogin({ payload }, { put, call, select, take }) {
      const response = yield autoLogin(payload);
      if (checkStatusCode(response)) {
        setStorage("token", response.token)
        yield put({ type: 'initData' })
        location.reload()
      }
    },
    *getAdvertisement({ payload }, { put, call, select, take }) {
      const response = yield getAdvertisementAPI(payload);
      if (checkStatusCode(response)) {
        const rows = response.rows || []
        yield put({
          type: 'saveState',
          payload: {
            advertisement: rows.length ? rows[0] : {}
          }
        })
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
