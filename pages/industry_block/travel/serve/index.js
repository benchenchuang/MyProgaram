// pages/industry_block/travel/serve/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections: [
      {
        path: '../sports/index',
        title: '常州体育运动服务综合楼',
        pic: app.globalData.globalUrl + 'industry/section_serve_01.jpg'
      },
      {
        path: '../observe/index',
        title: '监察委大楼',
        pic: app.globalData.globalUrl + 'industry/section_serve_02.jpg'
      },
      {
        path: '../bank/index',
        title: '兴业银行',
        pic: app.globalData.globalUrl + 'industry/section_serve_03.jpg'
      }
    ],
    banners: [
      {
        title: '1',
        path: '/uploads/src/images/industry/banner_serve.jpg'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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