const http = require('./httpRequest')
//code登录
export const loginCode = (params) => http.httpRequest(`/api/user/login`, 'POST', params);
//完善用户信息 /api/user/setUserInfo
export const setUserInfo = (params) => http.httpRequest(`/api/user/setUserInfo`, 'POST', params);
//提交留言 /api/feedback/publish
export const saveFeedback = (params) => http.httpRequest(`/api/feedback/publish`, 'POST', params);
// 获取轮播图列表 /api/advertisement/getList
//分类:1=首页,2=晋陵产业,3=晋陵动态,4=人才发展,5=联系我们
export const getBannerList = (params) => http.httpRequest(`/api/advertisement/getList`, 'POST', params);
//获取文章列表 /api/article/getList
/**
 * category
 * page,
 * pagesize
 */
export const getNewsList = (params) => http.httpRequest(`/api/article/getList`, 'POST', params);
//获取文章详情 /api/article/getInfo
export const getNewsInfo = (params) => http.httpRequest(`/api/article/getInfo`, 'POST', params);
//获取文章评论列表 /api/article/getCommentList
export const getCommentList = (params) => http.httpRequest(`/api/article/getCommentList`, 'POST', params);
//删除自己的文章评论 /api/article/deleteComment
export const deleteComment = (params) => http.httpRequest(`/api/article/deleteComment`, 'POST', params);
//文章点赞 /api/article/like
export const articeLike = (params) => http.httpRequest(`/api/article/like`, 'POST', params);
//发表文章评论 /api/article/publishComment
export const pulishComment = (params) => http.httpRequest(`/api/article/publishComment`, 'POST', params);
//获取招聘列表 /api/employment/getList
export const getJobList = (params) => http.httpRequest(`/api/employment/getList`, 'POST', params);
//获取招聘详情 /api/employment/getInfo
export const getJobInfo = (params) => http.httpRequest(`/api/employment/getInfo`, 'POST', params);
//提交应聘信息 /api/employment/apply
export const postApply = (params) => http.httpRequest(`/api/employment/apply`, 'POST', params);