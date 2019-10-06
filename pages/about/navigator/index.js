// pages/about/navigator/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigators:[
      {
        title:'江苏晋陵文化旅游发展有限公司',
        english:'Map navigator',
        latitude: 31.80346,
        longitude: 119.97136,
        address:'常州市锦绣路2号',
        pic:'../../../images/about/travel_01.jpg',
        telphone:'0519-82000112',
        child:[
          {
            title: '常州晋陵中吴酒店管理有限公司',
            english: 'Map navigator',
            latitude: 31.76435,
            longitude: 119.92063,
            address: '常州市钟楼区荆川路108号',
            pic: '../../../images/about/travel_02.jpg',
            telphone: '',
          },
          {
            title: '常州晋陵物业管理有限公司',
            english: 'Map navigator',
            latitude: 31.8084,
            longitude: 119.97765,
            address: '常州市新北区晋陵北路1号',
            pic: '../../../images/about/travel_03.jpg',
            telphone: '',
          },
          {
            title: '常州天宁宝塔文化发展有限公司',
            english: 'Map navigator',
            latitude: 31.77276,
            longitude: 119.96903,
            address: '常州市延陵东路636号',
            pic: '../../../images/about/travel_04.jpg',
            telphone: '',
          },
          {
            title: '常州奥体明都国际饭店有限公司',
            english: 'Map navigator',
            latitude: 31.80899,
            longitude: 119.98349,
            address: '常州市新北区龙锦路1261',
            pic: '../../../images/about/travel_05.jpg',
            telphone: '',
          },
          {
            title: '青果巷历史文化街区',
            english: 'Map navigator',
            latitude: 31.77199,
            longitude: 119.96152,
            address: '常州市天宁区青果巷27号',
            pic: '../../../images/about/travel_06.jpg',
            telphone: '86-018013959265',
          }
        ]
      },{
        title: '常州晋陵建设发展有限公司',
        english: 'Map navigator',
        latitude: 31.81069,
        longitude: 119.98155,
        address: '常州市新北区晋陵北路15号',
        pic: '../../../images/about/construction.jpg',
        telphone: '0519-86927715',
        child:[]
      }, {
        title: '常州晋陵医疗投资管理有限公司',
        english: 'Map navigator',
        latitude: 31.78071,
        longitude: 120.010597,
        address: '常州市天宁区龙锦路720号',
        pic: '../../../images/about/health_01.jpg',
        telphone: '0519-85583556',
        child: [
          {
            title: '晋陵医疗天宁体检中心',
            english: 'Map navigator',
            latitude: 31.78071,
            longitude: 120.010597,
            address: '常州市天宁区龙锦路720号',
            pic: '../../../images/about/health_02.jpg',
            telphone: '0519-85525999',
          },
          {
            title: '晋陵医疗奥体体检中心',
            english: 'Map navigator',
            latitude: 31.8084,
            longitude: 119.97765,
            address: '常州市晋陵北路1号奥体中心游泳馆Y2入口',
            pic: '../../../images/about/health_02.jpg',
            telphone: '0519-85583518',
          }
        ]
      }, {
        title: '常州体育产业集团有限公司',
        english: 'Map navigator',
        latitude: 31.80763,
        longitude: 119.98317,
        address: '常州市龙锦路1259-1号体综楼21楼',
        pic: '../../../images/about/sports_01.jpg',
        telphone: '0519-81281201',
        child: [
          {
            title: '常州奥体场馆管理有限公司',
            english: 'Map navigator',
            latitude: 31.8084,
            longitude: 119.97765,
            address: '常州市新北区晋陵北路1号',
            pic: '../../../images/about/sports_02.jpg',
            telphone: '0519-83066116',
          },
          {
            title: '常州飞步体育管理有限公司',
            english: 'Map navigator',
            latitude: 31.79095,
            longitude: 119.98177,
            address: '常州市天宁区新堂北路13号',
            pic: '../../../images/about/sports_03.jpg',
            telphone: '0519-83599970',
          },
          {
            title: '江苏润龙体育文化传媒有限公司',
            english: 'Map navigator',
            latitude: 31.80763,
            longitude: 119.98317,
            address: '常州市新北区龙锦路1259-1号20楼',
            pic: '../../../images/about/sports_04.jpg',
            telphone: '0519-68217793',
          }
        ]
      }
    ]
  },
  callPhone(e){
    let phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber:phone
    })
  },
  scanMapList(e){
    let index = e.currentTarget.dataset.index;
    let data = JSON.stringify(this.data.navigators[index]);
    wx.navigateTo({
      url: '../map_detail/index?data='+data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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