import axios from 'axios'

// axios 配置
// axios.defaults.timeout = 100000;
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default {
  // 获取首页缓存数据
  fentchIndexArticle : data => axios.get('http://localhost:3001/post',{ params: data}),
}
