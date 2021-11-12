import { bizUrl } from '@/utils/utils';
import { POST, GET } from '@/utils/request';

export const queryCurrentUser = async (params: any) => {
  return GET(bizUrl('/getInfo'), params);
};

export const autoLogin = async (params: any) => {
  return POST(bizUrl('/guestLogin'), params);
};
