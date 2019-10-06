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
    let category = e.currentTarget.dataset.category;
    let params = this.data.params;
    params.category = category;
    params.page = 1;
    this.setData({
      params,
      news:[]
    });
    this.getNewsList(params);
  },
  //获取新闻列表
  getNewsList(params){
    app.getNewsList(params).then(res=>{
      let news = this.data.news;
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
    let params = this.data.params;
    this.getBanners();
    this.getNewsList(params)
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