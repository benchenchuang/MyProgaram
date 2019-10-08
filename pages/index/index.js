//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    globalUrl: app.globalData.globalUrl,
    tabs:[
      {
        url:'../home_block/landscape/index',
        isTab:false,
        pic: app.globalData.globalUrl +'home_tab01.png'
      },
      {
        url:'../talent/jobs/index?is_urgent=1',
        isTab:false,
        pic: app.globalData.globalUrl +'home_tab02.png'
      },
      {
        url:'../dynamic/index',
        isTab:true,
        pic: app.globalData.globalUrl +'home_tab03.png'
      },
      {
        url:'../home_block/no_data/index',
        isTab:false,
        pic: app.globalData.globalUrl +'home_tab04.png'
      }
    ],
    banners:[],
    news:[],
    params:{
      category:1,
      page:1,
      pagesize:10
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //获取轮播图
  getBanners() {
    app.getBanners(1).then(res => {
      this.setData({
        banners: res
      })
    })
  },
  //获取新闻列表
  getNewsList(params){
    let news = this.data.news;
    app.getNewsList(params).then(res=>{
      news = news.concat(res)
      this.setData({
        news
      })
    })
  },
  onLoad: function () {
    this.getBanners();
    this.initNews();
  },
  //上拉触底
  onReachBottom(){
    let params = this.data.params;
    params.page++;
    this.setData({
      params
    })
    this.getNewsList(params);
  },
  onPullDownRefresh(){
    this.initNews();
  },
  initNews(){
    let params = this.data.params;
    params.page = 1;
    this.setData({
      params,
      news: []
    })
    this.getNewsList(params);
  }
})
