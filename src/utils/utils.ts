import { history, useParams } from 'umi';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

const HOST = (<any>window).bizApiUrl || '';

export const bizUrl = (url: string): string => `${(window as any).env.bizApi}${url}`;

// 定制路由跳转
export const routerLink = (type: 'List' | 'Detail', params: { cid: number | string; pid: number | string; nid?: number | string; fid: 'open' | 'inside' | 'oa' }, linkType: 'push' | 'replace' = 'push') => {
  const { cid, pid, nid = 0, fid } = params
  // @ts-ignore
  // history.push({
  //   pathname: type,
  //   query: { ...params, nid }
  // })
  linkType === 'push' && (location.href = `/${type}/${cid}/${pid}/${nid}/${fid}`)
  linkType === 'replace' && location.replace(`/${type}/${cid}/${pid}/${nid}/${fid}`)
}
