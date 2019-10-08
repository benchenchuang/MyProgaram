// pages/talent/index.js
const app = getApp();
const commonApi = require('../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    tabs:[
      {
        value:1,
        name:'集团本部'
      },
      {
        value: 2,
        name: '文化旅游'
      },
      {
        value: 3,
        name: '开发建设'
      },
      {
        value: 4,
        name: '健康医疗'
      },
      {
        value: 5,
        name: '体育教育'
      }
    ],
    jobs:[],
    urgentJobs:[],
    news:[],
    newsParams: {
      category: 10,
      page: 1,
      pagesize: 10
    },
    params:{
      part:1,
      page:1,
      pagesize:2
    }
  },
  //获取轮播图
  getBanners() {
    app.getBanners(4).then(res => {
      this.setData({
        banners: res
      })
    })
  },
  //获取招聘列表
  getJobList(params){
    wx.showLoading({
      title: '获取列表中',
    })
    commonApi.getJobList(params).then(res=>{
      wx.hideLoading();
      if(res.code==1){
        this.setData({
          jobs:res.data
        })
      }
    })
  },
  //获取招聘列表
  getUrgentList() {
    let params={
      is_urgent:1,
      page:1,
      pagesize:2
    }
    commonApi.getJobList(params).then(res => {
      if (res.code == 1) {
        this.setData({
          urgentJobs: res.data
        })
      }
    })
  },
  //切换
  changeJobs(e){
    let part = e.currentTarget.dataset.part;
    let params = this.data.params;
    params.part = part;
    this.setData({
      params
    })
    this.getJobList(params)
  },
  //获取新闻列表
  getNewsList(params) {
    let news = this.data.news;
    app.getNewsList(params).then(res => {
      news = news.concat(res)
      this.setData({
        news
      })
    })
  },
  //搜索
  searchKey(e){
    let keyword = e.detail.value;
    wx.navigateTo({
      url: './jobs/index?keyword='+keyword,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let params = this.data.params;
    this.getBanners();
    this.initNews();
    this.getJobList(params);
    this.getUrgentList();
  },
  //上拉触底
  onReachBottom() {
    let params = this.data.newsParams;
    params.page++;
    this.setData({
      params
    })
    this.getNewsList(params);
  },
  onPullDownRefresh() {
    this.initNews();
  },
  initNews() {
    let newsParams = this.data.newsParams;
    newsParams.page = 1;
    this.setData({
      newsParams,
      news: []
    })
    this.getNewsList(newsParams);
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