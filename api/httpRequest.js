// const baseUrl = 'https://personal-dev.mekeai.com/api';
const baseUrl = 'https://jljt.wannakeji.com';

//获取token
const getToken = () => {
  var token = wx.getStorageSync('token') || '';
  return token;
};
/**
 * url:请求接口的短链接
 * method:请求的方法 GET PUT POST ...
 * params:请求的参数
 */
const httpRequest = (url, method, params) => {
  let token = getToken()
  if (params && token){
    params.token = token;
  }
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`,
      method: method,
      data: params,
      dataType:'json',
      header: {
        'Content-Type': 'application/json',
        'token': getToken()
      },
      complete: (res) => {
        if (res.statusCode == 502) {
          wx.showLoading({
            title: '服务正在维护中'
          })
          console.log('服务正在维护中')
        } else if (res.statusCode == 200) {
          resolve(res.data)
        }else {
          reject(res.data)
        }
      }
    })
  })
  return promise
}

module.exports = {
  httpRequest: httpRequest,
  baseUrl: baseUrl
}