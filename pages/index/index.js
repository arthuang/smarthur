//index.js
//获取应用实例
var app = getApp()
var interval;
var timer;
var rollDice = function(dices) {
  console.log('roll')
  // $('.dice').each(function(){
  //     $(this).attr('class','dice dice-' + parseInt(Math.random()*6 + 1));
  // })
}
Page({
  data: {
    hideBtnTxt: '隐 藏',
    isShow: true,
    dices: [1, 2, 3, 4, 5]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // bindNicknameTap: function() {
  //   wx.navigateTo({
  //     url: '../userdetail/userdetail'
  //   })
  // },
  shake: function() {
    var arr = []
    for(var i = 0; i < 1000; i++) {
      var a = []; 
      for(var j = 0; j < 5; j++){ 
          a.push(parseInt(Math.random()*6 + 1))
      }
      arr.push(a)
    }
    var that = this
    arr.forEach(function(ele) {
      console.log(ele);
      that.setData({
        dices: ele
      })
    })
    arr = null;
  },
  hide: function(e) {
    var hideBtnTxt = this.data.hideBtnTxt == '隐 藏' ? "打 开" : "隐 藏"
    this.setData({
      isShow: !this.data.isShow,
      hideBtnTxt: hideBtnTxt
    })
  },
  onLoad: function() {
    // var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    wx.setNavigationBarTitle({
      title: "🎲  🎲  🎲"
    })
  }
})
