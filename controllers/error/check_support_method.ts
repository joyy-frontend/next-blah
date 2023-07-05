import BadReqError from './bad_request_erorr';

export default function checkSupportMethod(supportMethod: string[], method?: string) {
  if (supportMethod.indexOf(method!) === -1) {
    // 에러반환
    throw new BadReqError('지원하지 않는 method');
  }
}
