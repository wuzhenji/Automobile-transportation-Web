import { REQUEST_CODE } from './constant';
import { notification } from 'antd';
import { extend } from 'umi-request';
import { request as appRequest } from '@/app';
import { getStorage } from '@/utils/localstorage';

// 游客token
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImYyZWFlNzEwLWNiYzQtNDgwOC05ZTlkLTJiOGJkMTY1ODk3NSJ9.xZ6cYEt3q1Vv9aOkTSIQwwz_PPYQlS_eRd2UUtG6AGPAa6IV0PT-gADkYOAOoojKAWm_jPa5x__NWpU9pSJC_Q'

export const request = extend({
  headers: {
    Authorization: `Bearer ${token}`,
  },
  errorHandler: appRequest.errorHandler,
});

export const POST = async (url: string, params: any) => {
  return request(url, {
    method: 'POST',
    data: params,
  });
};

export const GET = async (url: string, params: any) => {
  return request(url, {
    method: 'GET',
    params,
  });
};

// 上传文件时用
export const UPLOAD = async (url: string, formData: any) => {
  return request(url, {
    method: 'GET',
    requestType: 'form',
    data: formData,
  });
};

interface IResponse {
  code: 200 | 401 | 404 | 500 | number;
  info: string;
  data: any;
}

export function checkStatusCode(response: IResponse, showFailToast: boolean = true) {
  if (!response) {
    notification.error({ message: '服务器错误' });
  }
  const { code, info } = response;
  if (REQUEST_CODE.NOT_AUTH === code) {
    // window.location.href = '/';
  } else if (REQUEST_CODE.SUCCESS !== code && showFailToast) {
    notification.error({ message: info });
  }
  return REQUEST_CODE.SUCCESS === code;
}
