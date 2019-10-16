// components/banner/index.js
const {baseUrl} = require('../../api/httpRequest.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners:Array,
    height: {
      type: Number,
      value: 418
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    baseUrl: baseUrl,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 4000,
    duration: 500
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navigateWeb(e) {
      let type = e.currentTarget.dataset.type;
      let id = e.currentTarget.dataset.id;
      let url = e.currentTarget.dataset.url;
      console.log(type)
      if (type == 1) {
        wx.navigateTo({
          url: '/pages/newsDetail/index?id=' + id,
        })
      } else if (type == 2){
        wx.navigateTo({
          url: '/pages/webview/index?url=' + url,
        })
      }
    },
  }
})
