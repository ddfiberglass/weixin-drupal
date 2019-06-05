//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: [],
    loading: true,
    stiky: {}
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
          articles: articles,
          loading: false
        });
        this.getStiky();
      }
    })
  },

  getStiky(){
    const stikyArticles = this.data.articles.filter(item => item.attributes.sticky === true);
    console.log(stikyArticles)
    this.setData({
      stiky: stikyArticles[0]
    })
  },

  onTabNode(event){
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/node/node?id=${id}`,
    })
  }
})