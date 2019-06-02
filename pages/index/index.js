//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: []
  },

  onLoad() {
    this.getArticles();
  },

  getArticles() {
    wx.request({
      url: 'https://api.zhaobg.com/jsonapi/node/article',
      header: {
        Accept: 'application/vnd.api+json'
      },
      success: (res) => {
        const articles = res.data.data;
        console.log(articles)
        this.setData({
          articles: articles
        })
      }
    })
  }
})