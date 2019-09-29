// components/map/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lat: Number,
    log: Number,
    iconPath: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      iconPath:'https://res.mekeai.com/00107ebb-dd6f-46a0-9429-a7d3495b7889',
      width:20,
      height:20
    }]
  },
  attached(){
    let latitude = this.properties.lat;
    let longitude = this.properties.log;
    let iconPath = this.properties.iconPath;
    let markers = this.data.markers;
    markers[0] = {
      id: latitude, 
      latitude, 
      longitude, 
      iconPath,
      width:20,
      height: 20
    }
    this.setData({
      markers,
      latitude,
      longitude
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
