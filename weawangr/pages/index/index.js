Page({
  data: {
    imgUrls: [
      '../images/banner1.jpg',
      '../images/banner2.jpg',
      '../images/banner3.jpg',
            ],
  },
  phone:function(e){
    wx.makePhoneCall({
  phoneNumber: '13417025501' 
})
  }
})