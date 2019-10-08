// pages/talent/jobs/index.js
const app = getApp();
const commonApi = require('../../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params:{
      part:'',
      keyword:'',
      is_urgent:0,
      page:1,
      pagesize:10
    },
    jobs:[]
  },
  //获取招聘列表
  getJobList(params) {
    // wx.showLoading({
    //   title: '获取列表中',
    // })
    commonApi.getJobList(params).then(res => {
      // wx.hideLoading();
      if (res.code == 1) {
        let jobs = this.data.jobs;
        jobs = jobs.concat(res.data)
        this.setData({
          jobs
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let part = options.type || '';
    let is_urgent = options.is_urgent || '';
    let keyword = options.keyword || '';
    let params = this.data.params;
    params.part = part;
    params.is_urgent = is_urgent;
    params.keyword = keyword;
    this.setData({
      params
    });
    this.getJobList(params)
  },
  //上拉触底
  onReachBottom() {
    let params = this.data.params;
    params.page++;
    this.setData({
      params
    })
    this.getJobList(params);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let params = this.data.params;
    params.page = 1;
    this.setData({
      params,
      jobs:[]
    })
    this.getJobList(params);
    setTimeout(()=>{
      wx.stopPullDownRefresh();
    }, 700)
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