// pages/industry_block/health/tn_equipment/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sections: [
      {
        path: '../scope/index',
        title: '西门子SOMATOM Scope',
        pic: app.globalData.globalUrl + 'aoti/scope.jpg'
      },
      {
        path: '../camera/index',
        title: '数字化X线摄影（DR）',
        pic: app.globalData.globalUrl + 'tianning/requirement/02.jpg'
      }
    ],
    banners: [
      {
        title: '1',
        path: '/uploads/src/images/aoti/requirement.jpg'
      }
    ]
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