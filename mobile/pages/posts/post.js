var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // posts_key: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化options为页面所跳转所需要的参数
    console.log(postsData.postList)
    var post_content=[
      {
        data: "Sep 2 2018",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/01.jpg",
        avatar: "/images/avater.jpg",
        content: "菊黄蟹正肥，品尝起IT界军军军军军军军快乐十分吉林省的看法了是的开发商来对付",
        reading: "12",
        collection: "96"
      },
      {
        data: "Sep 2 2019",
        title: "正是虾肥蟹壮时111",
        imgSrc: "/images/post/01.jpg",
        avatar: "/images/avater.jpg",
        content: "菊黄蟹正肥111，品尝起IT界军军军军军军军快乐十分吉林省的看法了是的开发商来对付",
        reading: "12",
        collection: "96"
      }
    ]
    
    // this.data.postList = postsData.postList
    this.setData({
      posts_key: postsData.postList
    });
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

  },
  
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  },
  onSwiperItemTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
  onSwiperTap:function(event){
    // target 和currentTarget  
    // target是值当前点击的组件image，currentTarget指的是时间捕获的组件swiper
    var postId = event.target.dataset.postid;
    console.log(event.target.dataset.postid)
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})