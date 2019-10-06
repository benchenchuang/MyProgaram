// pages/about/index.js
const app = getApp()
const commonApi = require('../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthorize: false,
    latitude: 23.099994,  //经纬度
    longitude: 113.324520,
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      height: 34,
      title: "what is this?",
      callout: {
        content: "what is this?",
        color: "#fff",
        fontSize: 12,
        borderRadius: 4,
        bgColor: "#2a82bd",
        borderColor:"#2a82bd",
        display: "ALWAYS", 
        padding: 5,
        textAlign: "center"
      }
    }],
    formData:{
      realname: '',
      phone: '',
      message: ''
    },
    banners:[]
  },
  callTelphone(){
    wx.makePhoneCall({
      phoneNumber:'0519-82000121'
    })
  },
  openLocation(){
    wx.openLocation({
      latitude: 31.80346,
      longitude: 119.97136,
      scale: '14',
      name: '常州晋陵投资集团',
      address: '常州市锦绣路2号（文化广场2-2号11楼）'
    })
  },
  setPutValue(e){
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value;
    let formData = this.data.formData;
    formData[type] = value;
    this.setData({
      formData
    })
  },
  handleSubmit(){
    this.formSubmit();
  },
  formSubmit(){
    let formData = this.data.formData;
    let realname = formData.realname;
    let phone = formData.phone;
    let message = formData.message;
    let phoneReg =/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
    if (!realname){
      wx.showToast({
        title: '姓名不能为空',
        icon:'none'
      });
      return;
    }
    if (!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon:'none'
      });
      return;
    } else if (!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号不正确',
        icon: 'none'
      });
      return;
    }
    if (!message){
      wx.showToast({
        title: '留言不能为空',
        icon:'none'
      });
      return;
    }
    commonApi.saveFeedback(formData).then(res=>{
      if(res.code==1){
        wx.showToast({
          title: '提交成功'
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
  },
  //授权信息
  onGotUserInfo(e){
    if (e.detail.userInfo){
      let userInfo = {};
      let getUserInfo = e.detail.userInfo
      app.handlerAuthorize(getUserInfo);
      this.setData({
        isAuthorize:true
      });
      userInfo.nickname = getUserInfo.nickName
      userInfo.avatar = getUserInfo.avatarUrl
      commonApi.setUserInfo(userInfo).then(res => {
        if(res.code==1){
          wx.showToast({
            title: '授权成功',
            icon:'none'
          })
        }
      })
      this.formSubmit();
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1000
      })
    }
  },
  //获取轮播图
  getBanners(){
    app.getBanners(5).then(res=>{
      this.setData({
        banners:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanners();
    app.getAuthorize().then(res =>{
      this.setData({
        isAuthorize:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})