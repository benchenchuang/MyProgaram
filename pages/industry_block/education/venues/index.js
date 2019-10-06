// pages/industry_block/education/venues/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    globalUrl: app.globalData.globalUrl,
    sections: [
      {
        path: '../qsy/index',
        title: '常州奥体戚墅堰全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/qsy_01.jpg'
      },
      {
        path: '../tn/index',
        title: '常州奥体天宁全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/tn_01.jpg'
      }, {
        path: '../zl/index',
        title: '常州奥体钟楼全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/zl_01.jpg'
      },{
        path: '../st/index',
        title: '常州奥体少体校全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/st_01.jpg'
      }, {
        path: '../dz/index',
        title: '常州奥体雕庄街道文体活动中心',
        pic: app.globalData.globalUrl + 'education/sports/dz_01.jpg'
      }, {
        path: '../jm/index',
        title: '常州奥体健身俱乐部（金梅馆）',
        pic: app.globalData.globalUrl + 'education/sports/jm_01.jpg'
      }, {
        path: '../hl/index',
        title: '常州奥体横林全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/hl_01.jpg'
      }, {
        path: '../cj/index',
        title: '常州奥体春江全民健身中心',
        pic: app.globalData.globalUrl + 'education/sports/cj_01.jpg'
      }, {
        path: '../gxy/index',
        title: '常州工学院体育馆',
        pic: app.globalData.globalUrl + 'education/sports/gxy_01.jpg'
      }, {
        path: '../lt/index',
        title: '常州乐天体育活动咨询有限公司',
        pic: app.globalData.globalUrl + 'education/sports/lt_01.jpg'
      },
    ],
    banners: [
      {
        title: '1',
        path: '/uploads/src/images/education/sports/banner_01.jpg'
      },
      {
        title: '1',
        path: '/uploads/src/images/education/sports/banner_02.jpg'
      },
      {
        title: '1',
        path: '/uploads/src/images/education/sports/banner_03.jpg'
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