module.exports = {
  getCacheAll: function ({state, commit}) {
    this._vm.$http.post('/news').then((res) => {
      state.articles = res.data.articles;
      state.hots = res.data.hots;
      state.tags = res.data.tags;
      console.log('mock获取的数据---', res);
    }).catch((e) => {
      console.log(e)
    });
  }
}
