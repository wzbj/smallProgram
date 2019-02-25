var postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    // this.data.postData = postData;
    this.setData({
      postData:postData
    })
    // console.log(postData)
    // wx.setStorageSync(key, data)
    // wx.setStorage({
    //   key: '',
    //   data: '',
    // })

    var postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected){
      var collected = postsCollected[postId]
      this.setData({
        collected:collected
      })
    }else{
      var postsCollected = {};
        postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },

  onCollectionTap:function(event){
    console.log(1111);
    var postsCollected = wx.getStorageSync('posts_collected');
    
    var postCollected = postsCollected[this.data.currentPostId];
    // 状态值切换
    postCollected = !postCollected;
    console.log(postCollected)
    postsCollected[this.data.currentPostId] = postCollected;
    // 更新文章是否缓存值
    wx.setStorageSync('posts_collected', postsCollected)
    // 更新数据绑定
    this.setData({
      collected:postCollected
    })
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