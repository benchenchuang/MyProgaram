// pages/industry_block/travel/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    globalUrl: app.globalData.globalUrl,
    sections:[
      {
        path:'./nursing/index',
        title:'常州工人疗养院',
        pic: app.globalData.globalUrl+'industry/section_lyy.jpg'
      },
      {
        path: './square/index',
        title: '文化广场',
        pic: app.globalData.globalUrl+'industry/section_culture.jpg'
      },
      {
        path: './hotel/index',
        title: '中吴宾馆',
        pic: app.globalData.globalUrl+'industry/section_zwbg.jpg'
      }
    ],
    news:[],
    banners: [
      {
        title: '1',
        path: '/uploads/src/images/industry/banner_construction_01.jpg'
      }
    ], 
    params: {
      category: '3',
      page: 1,
      pagesize: 10
    }
  },
  //获取新闻列表
  getNewsList(params) {
    app.getNewsList(params).then(res => {
      let news = this.data.news;
      news = news.concat(res)
      this.setData({
        news
      })
    })
  },
  //预览图片
  preview(e){
    let url=e.currentTarget.dataset.url;
    wx.previewImage({
      current: url,
      urls: [url]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = this.data.params;
    this.getNewsList(params)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let params = this.data.params;
    params.page++;
    this.setData({
      params
    })
    this.getNewsList(params);
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})