// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src:'../../images/c.png',
      btnc:'active',
      btnd:'inactive',
      btne: 'inactive',
      btnf: 'inactive'
  },
     c:function()
     {
       this.setData({
         src:'../../images/c.png',
         btnc: 'active',
         btnd: 'inactive',
         btne: 'inactive',
         btnf: 'inactive'
       })
     },
        d: function () {
      this.setData({
        src: '../../images/d.png',
        btnc: 'inactive',
        btnd: 'active',
        btne: 'inactive',
        btnf: 'inactive'
      })
    },
    e: function () {
      this.setData({
        src: '../../images/e.jpg',
        btnc: 'inactive',
        btnd: 'inactive',
        btne: 'active',
        btnf: 'inactive'
      })
    },
    f: function () {
      this.setData({
        src: '../../images/f.png',
        btnc: 'inactive',
        btnd: 'inactive',
        btne: 'inactive',
        btnf: 'active'
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