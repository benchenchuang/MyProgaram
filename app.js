//app.js
const commonApi = require('./api/index.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.getUserInfo();
    this.getAuthorize();
  },
  getAuthorize(){
    let that = this;
    let isAuthorize = false
    let token = wx.getStorageSync('token')
    let promise = new Promise((resolve,reject)=>{
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo'] && token) {
            that.globalData.isAuthorize = true;
            isAuthorize = true;
          } else {
            that.globalData.isAuthorize = false;
            isAuthorize = false;
          }
          resolve(isAuthorize)
        }
      })
    })
    return promise;
  },
  // 登录
  getUserInfo(){
    let that = this;
    let promise = new Promise((resolve,reject)=>{
      wx.login({
        success: res => {
          let params = {};
          params.code = res.code;
          commonApi.loginCode(params).then(data => {
            if(data.code==1){
              that.globalData.userInfo = data.data.userinfo;
              wx.setStorageSync('token', data.data.userinfo.token)
              resolve(data.data.userinfo)
            }
          })
        }
      })
    })
    return promise;
  },
  handlerAuthorize(userInfo){
    this.globalData.isAuthorize = true
    this.globalData.userInfo.nickname = userInfo.nickName;
    this.globalData.userInfo.avatar = userInfo.avatarUrl; 
  },
  //获取轮播图
  getBanners(category) {
    let promise = new Promise((resolve, reject) => {
      commonApi.getBannerList({ category: category }).then(res => {
        if (res.code == 1) {
          let banners = res.data;
          resolve(banners)
        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        }
      })
    })
    return promise;
  },
  //获取新闻列表
  getNewsList(params){
    let promise = new Promise((resolve, reject) => {
      commonApi.getNewsList(params).then(res => {
        if (res.code == 1) {
          let news = res.data;
          resolve(news)
        }else{
          wx.showToast({
            title: res.msg,
            icon:'none'
          })
        }
      })
    })
    return promise;
  },
  globalData: {
    userInfo: null,
    globalUrl:'https://jljt.wannakeji.com/uploads/src/images/',
    isAuthorize:false
  }
})