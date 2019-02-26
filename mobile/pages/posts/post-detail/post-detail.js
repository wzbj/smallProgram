var postsData = require('../../../data/posts-data.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var globalData = app.globalData;
    // console.log(globalData);
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

    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId){
      this.setData({
        isPlayingMusic: true
      })
    }

    this.setMusicMonitor();

    
  },

  setMusicMonitor:function(){
    // 监听音乐的启动
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_currentMusicPostId = that.data.currentPostId
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId = null;
    });
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

    wx.showToast({
      title: postCollected?"收藏成功":"取消收藏",
      duration:1000,
      icon:'loading'
    })
  },

  onShareTap:function(){
    wx.showActionSheet({
      itemList: [
        "分享给微信好友",
        "分享到朋友圈",
        "分享给QQ好友",
        "分享给微博"
      ],
      itemColor: '#f66',
      success(res) {
        // res.cancel  用户是不是点击了取消按钮
        // res.tapIndex 数组元素的序号，从0开始
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },

  onMusicTap:function(event){
    var isPlayingMusic = this.data.isPlayingMusic;
    var currentPostId  = this.data.currentPostId; 
    if (isPlayingMusic){
      wx.pauseBackgroundAudio();
      // this.data.isPlayingMusic = false;
      this.setData({
        isPlayingMusic: false
      })
    }else{
      wx.playBackgroundAudio({
        dataUrl: postsData.postList[currentPostId].music.url,
        title: postsData.postList[currentPostId].music.title,
        coverImgUrl: postsData.postList[currentPostId].music.coverImg
      })
      this.setData({
        isPlayingMusic:true
      })
      // this.data.isPlayingMusic = true;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (event) {
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