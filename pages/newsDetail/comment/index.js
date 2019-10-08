// pages/newsDetail/comment/index.js
const commonApi = require('../../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    params:{
      content:'',
      article_id:''
    }
  },
  changeComment(e){
    let content = e.detail.value;
    let params = this.data.params;
    params.content = content;
    this.setData({
      params
    })
  },
  sendComment(){
    wx.showLoading({
      title: '提交中....',
    })
    let params = this.data.params;
    commonApi.pulishComment(params).then(res=>{
      wx.hideLoading();
      if(res.code==1){
        wx.showToast({
          title: '发布成功'
        });
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1
          })
        },1000 )
      }else{
        wx.showToast({
          title: res.msg,
          icon:'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu({})
    let article_id = options.id;
    let title = options.title;
    let params = this.data.params;
    params.article_id = article_id;
    this.setData({
      title,
      params
    })
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