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
        path:'./hotel/index',
        title:'酒店管理',
        pic: app.globalData.globalUrl+'industry/section_hotel.jpg'
      },
      {
        path: './serve/index',
        title: '物业管理',
        pic: app.globalData.globalUrl +'industry/section_serve.jpg'
      },
      {
        path: './street/index',
        title: '青果巷',
        pic: app.globalData.globalUrl +'industry/section_qgx.jpg'
      },
      {
        path: './tower/index',
        title: '天宁宝塔',
        pic: app.globalData.globalUrl +'industry/section_pagoda.jpg'
      }, 
      {
        path: './zhongwu/index',
        title: '中吴宾馆',
        pic: app.globalData.globalUrl +'industry/section_zw.jpg'
      }
    ],
    news:[],
    banners: [
      {
        title: '1',
        image: '/uploads/src/images/industry/banner_travel_01.jpg'
      }
    ],
    params: {
      category: '2',
      page: 1,
      pagesize: 10
    }
  },
  //获取新闻列表
  getNewsList(params,isUpdate=false) {
    app.getNewsList(params).then(res => {
      let news = [];
      if(!isUpdate){
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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