// components/map/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    latitude: Number,
    longitude: Number,
    address:String
  },
  /**
   * 组件的初始数据
   */
  data: {
    markers: [{
      id: 0,
      iconPath:"../../images/location.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30,
      callout: {
        content: "where",
        color: "#fff",
        fontSize: 12,
        borderRadius: 4,
        bgColor: "#2bd798",
        borderColor: "#2bd798",
        display: "ALWAYS",
        padding: 5,
        textAlign: "center"
      }
    }]
  },
  attached(){
    let latitude = this.properties.latitude;
    let longitude = this.properties.longitude;
    let address = this.properties.address;
    let markers = this.data.markers;
    markers[0].latitude= latitude;
    markers[0].longitude = longitude;
    markers[0].callout['content'] = address;
    this.setData({
      markers
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
