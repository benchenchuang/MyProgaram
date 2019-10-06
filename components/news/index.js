// components/news/index.js
const { baseUrl } = require('../../api/httpRequest.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    baseUrl: baseUrl
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
