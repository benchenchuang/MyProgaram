const http = require('./httpRequest')
export default {
  //发布觅客圈内容
  addCircle:(params) => http.sendRequest(`${version}/user/Circle`, 'POST', params),
  //获取觅客圈关注列表
  showMyFocus:(params) => http.sendRequest(`${version}/user/Circle/showMyFocus`, 'POST', params),
  //获取标签
  getLabelList:() => http.sendRequest(`${version}/Circle/getCircleMekeLabel`, 'GET'),
  //觅客圈详情
  getCircleInfo:(params) => http.sendRequest(`${version}/user/Circle/getCircleInfo`, 'POST', params),
  //评论作品
  comment:(params) => http.sendRequest(`${version}/user/Circle/Comment`, 'POST', params),
  //回复作品
  reply:(params) => http.sendRequest(`${version}/user/Circle/reply`, 'POST', params),
  //获取觅客圈消息 type==5个人首页
  getFirstCircle:(params) => http.sendRequest(`${version}/user/Circle/MyCircle`, 'POST', params)
}