// pages/dynamic/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    actives: [],
    tabs:[
      {
        value:'6,7,8,9',
        name:'全部'
      },
      {
        value: '6',
        name: '文化旅游'
      },
      {
        value: '7',
        name: '开发建设'
      },
      {
        value: '8',
        name: '健康医疗'
      },
      {
        value: '9',
        name: '体育教育'
      }
    ],
    news: [],
    params:{
      category: '6,7,8,9',
      page:1,
      pagesize:10
    }
  },
  //切换新闻类型
  selectTab(e){
    wx.showLoading({
      title: '列表获取中...',
    })
    let category = e.currentTarget.dataset.category;
    let params = this.data.params;
    params.category = category;
    params.page = 1;
    this.setData({
      params
    });
    this.getNewsList(params,true);
  },
  //获取新闻列表
  getNewsList(params, isUpdate = false){
    app.getNewsList(params).then(res=>{
      wx.hideLoading()
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
  //获取轮播图
  getBanners() {
    app.getBanners(3).then(res => {
      this.setData({
        actives: res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanners();
    this.initNews();
  },
  //上拉触底
  onReachBottom() {
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
  onTabItemTap() {
    this.getBanners();
    this.initNews(true);
  },
  onPullDownRefresh() {
    this.getBanners();
    this.initNews(true);
  },
  initNews(isUpdate) {
    let params = this.data.params;
    params.page = 1;
    this.setData({
      params
    })
    this.getNewsList(params, isUpdate);
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