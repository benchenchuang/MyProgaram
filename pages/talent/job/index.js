// pages/talent/job/index.js
const commonApi = require('../../../api/index.js');
const { baseUrl} = require('../../../api/httpRequest.js')
var WxParse = require('../../../wxParse/wxParse.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: baseUrl,
    isAuthorize: false,
    employment_id:'',
    info:{},
    apply:{
      employment_id:'',
      realname:'',
      phone:'',
      education:'',
      age:'',
      sex:'男',
      experience:'',
      cv_images:'',
    },
    array: ['男', '女'],
    index: 0,
    photos:[]
  },
  //选择性别
  bindPickerChange: function (e) {
    let index = e.detail.value;
    let apply = this.data.apply;
    apply.sex = this.data.array[index]
    this.setData({
      index,
      apply
    })
  },
  //输入同步
  changePut(e){
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value;
    let apply = this.data.apply;
    apply[type] = value;
    this.setData({
      apply
    })
  },
  //工作详情
  getJobDetail(employment_id){
    commonApi.getJobInfo({ employment_id: employment_id}).then(res=>{
      if(res.code==1){
        wx.setNavigationBarTitle({
          title: res.data.title || '职位详细'
        })
        this.setData({
          info:res.data,
          content: WxParse.wxParse('content', 'html', res.data.content, this)
        })
      }
    })
  },
  pickerUpload(){
    let that = this;
    let photos = this.data.photos;
    let maxLength = 6;
    if(photos.length<6){
      wx.chooseImage({
        count: maxLength-photos.length,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          tempFilePaths.map(item => {
            wx.uploadFile({
              url: `${baseUrl}/api/common/upload`,
              filePath: item,
              name: 'file',
              success(res) {
                let resData = JSON.parse(res.data);
                if (resData.code == 1) {
                  photos.push(resData.data.url)
                  that.setData({
                    photos
                  })
                }
              }
            })
          })
        }
      })
    }
    
  },
  //删除照片
  delPhoto(e){
    let index = e.currentTarget.dataset.index;
    let photos = this.data.photos;
    photos.splice(index,1);
    this.setData({
      photos
    })
  },
  //提交简历
  submitResume(){
    let { realname, phone, education, age, sex, experience} = this.data.apply;
    let cv_images = this.data.photos.join(',');
    let apply = this.data.apply;
    apply.cv_images = cv_images;
    let phoneReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
    if(!realname){
      wx.showToast({
        title: '请输入姓名',
        icon:'none'
      });
      return ;
    }
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      });
      return;
    } else if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号不正确',
        icon: 'none'
      });
      return;
    }
    if (!education){
      wx.showToast({
        title: '请输入学历',
        icon:'none'
      });
      return ;
    }
    if (!age){
      wx.showToast({
        title: '请输入年龄',
        icon:'none'
      });
      return ;
    }
    if (!experience){
      wx.showToast({
        title: '请输入工作经验',
        icon:'none'
      });
      return ;
    }
    if (!cv_images){
      wx.showToast({
        title: '请上传简历照片',
        icon: 'none'
      });
      return;
    }
    commonApi.postApply(apply).then(res=>{
      if(res.code==1){
        wx.showToast({
          title: '提交成功！',
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
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
    let employment_id = options.id;
    let apply = this.data.apply;
    apply.employment_id = employment_id;
    this.setData({
      apply
    });
    this.getJobDetail(employment_id)
    app.getAuthorize().then(res => {
      this.setData({
        isAuthorize: res
      })
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
      this.submitResume();
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1000
      })
    }
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