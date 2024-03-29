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
        path:'./tn_enviroment/index',
        title:'天宁晋陵环境',
        pic: app.globalData.globalUrl +'industry/section_tn_01.jpg'
      },
      {
        path: './tn_equipment/index',
        title: '天宁晋陵主要设备',
        pic: app.globalData.globalUrl +'industry/section_tn_02.jpg'
      },
      {
        path: './at_enviroment/index',
        title: '奥体晋陵环境',
        pic: app.globalData.globalUrl+'industry/section_at_01.jpg'
      },
      {
        path: './at_equipment/index',
        title: '奥体晋陵主要设备',
        pic: app.globalData.globalUrl + 'industry/section_at_02.jpg'
      }
    ],
    news:[],
    banners: [
      {
        title: '1',
        path: '/uploads/src/images/industry/banner_health_01.jpg'
      }
    ],
    params: {
      category: '4',
      page: 1,
      pagesize: 10
    }
  },
  //获取新闻列表
  getNewsList(params,isUpdate = false) {
    app.getNewsList(params).then(res => {
      let news = [];
      if (!isUpdate) {
        news = this.data.news;
      }
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
    this.initNews(true);
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
  onPullDownRefresh() {
    this.initNews(true);
  },
  initNews(isUpdate) {
    let params = this.data.params;
    params.page = 1;
    this.setData({
      params
    })
    this.getNewsList(params,isUpdate);
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})