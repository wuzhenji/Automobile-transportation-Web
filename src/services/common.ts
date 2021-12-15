import { bizUrl } from '@/utils/utils';
import { GET, POST } from '@/utils/request';
import moment from 'moment';

// 获取文章
export const getFragmentManageAPI = async (params: any) => {
    return GET(bizUrl(`/fragment/manage/${params.id}`), {});
};

// 获取文章
export const getContentManageAPI = async (params: any) => {
    return GET(bizUrl('/content/manage/list'), { ...params, status: 1, type: 1 });
};

// 获取子集
export const getColManageAPI = async (params: any) => {
    return GET(bizUrl('/col/manage/list'), params);
};

// 栏目列表
export const getMainColAPI = async (params: any) => {
    return GET(bizUrl(`/main/col/${params.parentId}`), params);
};

// 内容列表
export const getMainContentAPI = async (params: any) => {
    return GET(bizUrl(`/main/content/${params.parentId}`), params);
};

// 内容
export const getMainContentDetailAPI = async (params: any) => {
    return GET(bizUrl(`/main/content/detail/${params.id}`), params);
};

// 首页广告
export const getAdvertisementAPI = async (params: any) => {
    return GET(bizUrl(`/advertisement/info/list`), params);
};