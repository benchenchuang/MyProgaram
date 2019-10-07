// pages/news/index.js
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp();
const commonApi = require('../../api/index.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAuthorize:false,
    article: {},
    content:"",
    userId:"",
    params:{
      article_id:'',
      page:1,
      pagesize:10
    },
    comments:[]
  },
  //获取文章详情
  getNewsInfo(id){
    commonApi.getNewsInfo({article_id:id}).then(res=>{
      if(res.code==1){
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        // let params = this.data.params;
        // params.article_id = res.data.id;
        // if (res.data.can_comment){
        //   this.getCommentList(params);
        // }
        this.setData({
          article:res.data,
          content: WxParse.wxParse('content', 'html', res.data.content, this)
        })
      }
    })
  },
  getCommentList(params){
    commonApi.getCommentList(params).then(res=>{
      if(res.code==1){
        let comments = this.data.comments;
        comments = comments.concat(res.data);
        this.setData({
          comments
        })
      }
    })
  },
  //授权信息
  onGotUserInfo(e) {
    if (e.detail.userInfo) {
      let userInfo = {};
      let getUserInfo = e.detail.userInfo
      app.handlerAuthorize(getUserInfo);
      this.setData({
        isAuthorize: true
      });
      userInfo.nickname = getUserInfo.nickName
      userInfo.avatar = getUserInfo.avatarUrl
      commonApi.setUserInfo(userInfo).then(res => {
        if (res.code == 1) {
          wx.showToast({
            title: '授权成功',
            icon: 'none'
          })
        }
      })
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1000
      })
    }
  },
  //删除评论
  delComment(e){
    let that = this;
    let comment_id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    let comments = this.data.comments;
    wx.showModal({
      title: '删除提示',
      content: '确定删除此条评论？',
      success(res) {
        if (res.confirm) {
          commonApi.deleteComment({ comment_id }).then(res => {
            if (res.code == 1) {
              wx.showToast({
                title: '删除成功'
              });
              comments.splice(index,1);
              that.setData({
                comments
              })
            } else {
              wx.showToast({
                title: res.msg,
                icon: 'none'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  handleLike(e){
    let type = e.currentTarget.dataset.type;
    let id = e.currentTarget.dataset.id;
    let article = this.data.article;
    commonApi.articeLike({article_id:id}).then(res=>{
      if(res.code==1){
        if (type == 0) {//取消点赞
          article.is_like = 0;
          article.likes -= 1;
          this.setData({
            article
          })
        } else {//去点赞
          article.is_like = 1;
          article.likes += 1;
          this.setData({
            article
          })
        }
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = this.data.params;
    let id = options.id;
    let userId = app.globalData.userInfo.id;
    this.getNewsInfo(id);
    params.article_id = id;
    this.setData({
      userId,
      params
    });
    app.getAuthorize().then(res => {
      this.setData({
        isAuthorize: res
      })
    })
  },
  //上拉触底
  onReachBottom() {
    let params = this.data.params;
    params.page++;
    this.setData({
      params
    })
    this.getCommentList(params);
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
    this.setData({
      comments:[]
    })
    let params = this.data.params;
    params.page = 1;
    this.getCommentList(params);
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